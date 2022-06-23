/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DamageTrackComponent } from "./damage-track.component";

describe("DamageTrackComponent", () => {
  let component: DamageTrackComponent;
  let fixture: ComponentFixture<DamageTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DamageTrackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
