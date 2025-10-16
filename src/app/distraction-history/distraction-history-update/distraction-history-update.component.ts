import {Component, inject, signal} from '@angular/core';
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

  ngOnInit(): void {
    this.distractionHistoryService.query().subscribe(res =>{
      this.distractionHistories.set(res.body ?? []);
    });
  }
}
