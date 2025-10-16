import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../component/sidebar/sidebar.component';

@Component({
  selector: 'app-help-page',
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  sidebarOpen: boolean = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
