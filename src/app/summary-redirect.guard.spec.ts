/** @format */

import { TestBed } from "@angular/core/testing";

import { SummaryRedirectGuard } from "./summary-redirect.guard";

describe("SummaryRedirectGuard", () => {
  let guard: SummaryRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SummaryRedirectGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
