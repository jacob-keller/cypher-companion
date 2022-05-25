/** @format */

import { Injectable } from "@angular/core";
import { Router, NavigationEnd, Event } from "@angular/router";

const key = "cypherCompanionLastView";

@Injectable({
  providedIn: "root",
})
export class LastNonSummaryViewService {
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if (url !== "/summary" && url !== "") {
          sessionStorage.setItem(key, url);
        }
      }
    });
  }

  getLastView(): string {
    const views = ["/skills", "/abilities", "/cyphers", "/equipment", "/notes"];

    const lastView = sessionStorage.getItem(key);
    if (!lastView || !views.includes(lastView)) {
      // Default to skills if we don't have or don't recognize the view
      return "/skills";
    }

    return lastView;
  }
}
