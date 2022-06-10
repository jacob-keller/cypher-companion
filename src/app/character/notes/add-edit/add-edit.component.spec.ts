/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AbilitiesAddEditComponent } from "./add-edit.component";

describe("AbilitiesAddEditComponent", () => {
  let component: AbilitiesAddEditComponent;
  let fixture: ComponentFixture<AbilitiesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbilitiesAddEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
