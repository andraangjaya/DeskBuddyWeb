import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SidebarComponent} from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-distraction-history-update',
  imports: [
    RouterLink,
    RouterLinkActive,
    SidebarComponent
  ],
  templateUrl: './distraction-history-update.component.html',
  standalone: true,
  styleUrl: './distraction-history-update.component.css'
})
export class DistractionHistoryUpdateComponent {

}
