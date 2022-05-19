import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SmallBreakpointService } from './small-breakpoint.service';
import { LastNonSummaryViewService } from './last-non-summary-view.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryRedirectGuard implements CanActivate {
  constructor(private sbp : SmallBreakpointService, private router : Router, private view : LastNonSummaryViewService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.sbp.isScreenSmall()) {
        return true;
      } else {
        return this.router.parseUrl(this.view.getLastView());
      }
  }
}
