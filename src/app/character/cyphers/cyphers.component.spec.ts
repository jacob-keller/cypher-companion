/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CyphersComponent } from "./cyphers.component";

describe("CyphersComponent", () => {
  let component: CyphersComponent;
  let fixture: ComponentFixture<CyphersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyphersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyphersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
