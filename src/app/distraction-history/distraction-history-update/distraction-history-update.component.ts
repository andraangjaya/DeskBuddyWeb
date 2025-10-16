import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-distraction-history-update',
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './distraction-history-update.component.html',
  standalone: true,
  styleUrl: './distraction-history-update.component.css'
})
export class DistractionHistoryUpdateComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
