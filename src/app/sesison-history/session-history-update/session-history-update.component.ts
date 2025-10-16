import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-session-history-update',
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './session-history-update.component.html',
  standalone: true,
  styleUrl: './session-history-update.component.css'
})
export class SessionHistoryUpdateComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
