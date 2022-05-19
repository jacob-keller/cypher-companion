import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LastNonSummaryViewService {

  // By default, if we haven't yet navigated anywhere, use /skills
  //
  // If the user fully redirects manually to summary, it will potentially do
  // a fresh page reload. If this occurs, we'll default to skills. Perhaps
  // we want to keep this in local or session storage?
  private lastView : string = '/skills';

  constructor(private router : Router) {
    router.events.subscribe((event : Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if (url !== '/summary' && url !== '') {
          this.lastView = url;
        }
      }
    });
  }

  getLastView() : string {
    return this.lastView;
  }
}
