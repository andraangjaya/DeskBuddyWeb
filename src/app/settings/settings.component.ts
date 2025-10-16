import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../component/sidebar/sidebar.component';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
