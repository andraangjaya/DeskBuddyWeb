import {Component, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';
import {DatePipe} from '@angular/common';
import {SessionHistory} from '../../sesison-history/session-history.model';
import {SessionHistoryService} from '../../sesison-history/session-history.service';
import {DistractionHistoryModel} from '../distraction-history.model';
import {DistractionHistoryService} from '../distraction-history.service';

@Component({
  selector: 'app-distraction-history-update',
  imports: [
    SidebarComponent,
    DatePipe
  ],
  templateUrl: './distraction-history-update.component.html',
  standalone: true,
  styleUrl: './distraction-history-update.component.css'
})
export class DistractionHistoryUpdateComponent {
  distractionHistories = signal<DistractionHistoryModel[]>([]);
  private readonly distractionHistoryService = inject(DistractionHistoryService);

  ngOnInit(): void {
    this.distractionHistoryService.query().subscribe(res =>{
      this.distractionHistories.set(res.body ?? []);
    });
  }
}
