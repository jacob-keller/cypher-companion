/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoDebilitatedComponent } from "./info-debilitated.component";

describe("InfoDebilitatedComponent", () => {
  let component: InfoDebilitatedComponent;
  let fixture: ComponentFixture<InfoDebilitatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDebilitatedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDebilitatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
