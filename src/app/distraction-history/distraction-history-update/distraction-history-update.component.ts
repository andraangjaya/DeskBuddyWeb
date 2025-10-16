import {Component, computed, inject, signal} from '@angular/core';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';
import {CommonModule, DatePipe} from '@angular/common';
import {DistractionHistoryModel} from '../distraction-history.model';
import {DistractionHistoryService} from '../distraction-history.service';
import {TimeFormatPipe} from '../time-format.pipe';

@Component({
  selector: 'app-distraction-history-update',
  imports: [
    SidebarComponent,
    DatePipe,
    CommonModule,
    TimeFormatPipe
  ],
  templateUrl: './distraction-history-update.component.html',
  standalone: true,
  styleUrl: './distraction-history-update.component.css'
})
export class DistractionHistoryUpdateComponent {
  distractionHistories = signal<DistractionHistoryModel[]>([]);
  private readonly distractionHistoryService = inject(DistractionHistoryService);

  totalDistractions = computed(() => this.distractionHistories().length);
  totalMembers = computed(() => {
    const data = this.distractionHistories();
    const unique = new Set(
      data.map(d => `${d.firstName?.trim().toLowerCase()} ${d.lastName?.trim().toLowerCase()}`)
    );
    return unique.size;
  });

  activeNow = computed(() => {
    const data = this.distractionHistories();
    if (!Array.isArray(data)) return 0;

    return data.filter(d => {
      const raw = d?.timeElapsed;
      if (raw === null || raw === undefined) return true;

      const t = String(raw).trim().toLowerCase();
      return t === '' || t === '0' || t === '0s' || t === 'nan' || t === 'null';
    }).length;
  });

  searchQuery = signal<string>('');
  sortOrder = signal<'newest' | 'oldest'>('newest');
  sortedHistories = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const data = [...this.distractionHistories()];
    const order = this.sortOrder();

    const filtered = data.filter(item =>
      `${item.firstName} ${item.lastName}`.toLowerCase().includes(query) ||
      String(item.session).includes(query)
    );

    return filtered.sort((a, b) => {
      const timeA = Date.parse(a.distractionStart || '') || 0;
      const timeB = Date.parse(b.distractionEnd || '') || 0;
      return order === 'newest' ? timeB - timeA : timeA - timeB;
    });
  });

  onSortChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as 'newest' | 'oldest';
    this.sortOrder.set(value);
  }


  ngOnInit(): void {
    this.distractionHistoryService.query().subscribe(res =>{
      this.distractionHistories.set(res.body ?? []);
    });
  }
}
