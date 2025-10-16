import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';
import {SessionHistoryService} from '../session-history.service';
import {SessionHistory} from '../session-history.model';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-session-history-update',
  imports: [
    SidebarComponent,
    DatePipe,
    NgClass
  ],
  templateUrl: './session-history-update.component.html',
  standalone: true,
  styleUrl: './session-history-update.component.css'
})
export class SessionHistoryUpdateComponent implements OnInit {
  sessionHistories = signal<SessionHistory[]>([]);
  private readonly sessionHistoryService = inject(SessionHistoryService);
  totalMembers = computed(() => {
    const data = this.sessionHistories();
    const unique = new Set(
      data.map(s => `${s.firstName?.trim().toLowerCase()} ${s.lastName?.trim().toLowerCase()}`)
    );
    return unique.size;
  });

  activeNow = computed(() =>
    this.sessionHistories().filter(s => s.status?.toUpperCase() === 'IN_PROGRESS').length
  );

  formatStatus(status: string | null | undefined): string {
    if (!status) return '';
    const formatted = status.replace(/_/g, ' ');
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  searchQuery = signal<string>('');
  sortOrder = signal<'newest' | 'oldest'>('newest');
  sortedHistories = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const data = [...this.sessionHistories()];
    const order = this.sortOrder();

    const filtered = data.filter(item =>
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(query) ||
      String(item.session).includes(query) ||
      item.status?.toLowerCase().includes(query)
    );

    return filtered.sort((a, b) => {
      const timeA = Date.parse(a.timeStarted || '') || 0;
      const timeB = Date.parse(b.timeStarted || '') || 0;
      return order === 'newest' ? timeB - timeA : timeA - timeB;
    });
  });

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as 'newest' | 'oldest';
    this.sortOrder.set(value);
  }

  ngOnInit(): void {
    this.sessionHistoryService.query().subscribe(res => {
      this.sessionHistories.set(res.body ?? []);
    });
  }
}
