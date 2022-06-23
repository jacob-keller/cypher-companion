/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InfoImpairedComponent } from "./info-impaired.component";

describe("InfoImpairedComponent", () => {
  let component: InfoImpairedComponent;
  let fixture: ComponentFixture<InfoImpairedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoImpairedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImpairedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
