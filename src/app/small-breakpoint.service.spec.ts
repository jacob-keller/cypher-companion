import { TestBed } from '@angular/core/testing';

import { SummaryBreakpointService } from './summary-breakpoint.service';

describe('SummaryBreakpointService', () => {
  let service: SummaryBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryBreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
