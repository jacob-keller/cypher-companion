/** @format */

import { Component } from "@angular/core";
import { LastNonSummaryViewService } from "./last-non-summary-view.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Cypher Companion";

  // We load the view here in order to ensure its injected as soon as the
  // page loads. Otherwise, the services do not get properly injected until
  // after a load of the summary page. We do not need to load
  // SmallBreakpointService the same way because this service only matters
  // if we're on the summary page. If we use small break point in another
  // view it might become necessary to load it here.
  constructor(private view: LastNonSummaryViewService) {}
}
