/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RecoveryRollsComponent } from "./recovery-rolls.component";

describe("RecoveryRollsComponent", () => {
  let component: RecoveryRollsComponent;
  let fixture: ComponentFixture<RecoveryRollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoveryRollsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
