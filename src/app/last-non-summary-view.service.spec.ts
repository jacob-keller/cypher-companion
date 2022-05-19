/** @format */

import { TestBed } from "@angular/core/testing";

import { LastNonSummaryViewService } from "./last-non-summary-view.service";

describe("LastNonSummaryViewService", () => {
  let service: LastNonSummaryViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastNonSummaryViewService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
