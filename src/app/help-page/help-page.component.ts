import { Component } from '@angular/core';
import {SidebarComponent} from '../component/sidebar/sidebar.component';

@Component({
  selector: 'app-help-page',
  imports: [
    SidebarComponent
  ],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {

}
