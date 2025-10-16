import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';
import {SessionHistoryService} from '../session-history.service';
import {SessionHistory} from '../session-history.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-session-history-update',
  imports: [
    SidebarComponent,
    DatePipe
  ],
  templateUrl: './session-history-update.component.html',
  standalone: true,
  styleUrl: './session-history-update.component.css'
})
export class SessionHistoryUpdateComponent implements OnInit{
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

    ngOnInit(): void {
        this.sessionHistoryService.query().subscribe(res =>{
          this.sessionHistories.set(res.body ?? []);
        });
    }
}
