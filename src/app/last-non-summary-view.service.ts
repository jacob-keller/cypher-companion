import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LastNonSummaryViewService {

  private lastView : string = '';

  constructor(private router : Router) {
    router.events.subscribe((event : Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/summary') {
          this.lastView = event.urlAfterRedirects;
        }
      }
    });
  }

  getLastView() : string {
    return this.lastView;
  }
}
