import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  active: 'session' | 'distraction' | 'settings' | 'help' = 'session';

  setActive(target: 'session' | 'distraction' | 'settings' | 'help') {
    this.active = target;
  }
}
