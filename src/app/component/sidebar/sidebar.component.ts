import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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
export class SidebarComponent implements OnInit {
  active: 'session' | 'distraction' | 'settings' | 'help' = 'session';

  constructor(private router: Router) {}

  ngOnInit() {
    this.syncActiveWithUrl(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.syncActiveWithUrl(e.urlAfterRedirects || e.url);
      });
  }

  setActive(target: 'session' | 'distraction' | 'settings' | 'help') {
    this.active = target;
  }

  private syncActiveWithUrl(url: string) {
    if (url.includes('/distractionhistory')) {
      this.active = 'distraction';
    } else if (url.includes('/settings')) {
      this.active = 'settings';
    } else if (url.includes('/help')) {
      this.active = 'help';
    } else {
      this.active = 'session';
    }
  }
}
