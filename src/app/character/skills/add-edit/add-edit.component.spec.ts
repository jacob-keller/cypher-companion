/** @format */

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SkillsAddEditComponent } from "./add-edit.component";

describe("SkillsAddEditComponent", () => {
  let component: SkillsAddEditComponent;
  let fixture: ComponentFixture<SkillsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsAddEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
