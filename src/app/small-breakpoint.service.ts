/** @format */

import { Injectable } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { LastNonSummaryViewService } from "./last-non-summary-view.service";

@Injectable({
  providedIn: "root",
})
export class SmallBreakpointService {
  private small: boolean;

  constructor(private bpo: BreakpointObserver, private router: Router, private view: LastNonSummaryViewService) {
    const styleToCheck = "(min-width: 576px)";

    // Set small screen size on init
    if (window.innerWidth >= 576) {
      this.small = false;
    } else {
      this.small = true;
    }

    // Listen to the change in screen width
    this.bpo.observe([styleToCheck]).subscribe((result) => {
      if (result.matches) {
        if (this.router.url === "/summary") {
          this.router.navigate([view.getLastView()]);
        }
        this.small = false;
      } else {
        this.small = true;
      }
    });
  }

  public isScreenSmall() {
    return this.small;
  }
}
