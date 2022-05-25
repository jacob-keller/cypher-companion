/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Skill, SkillType } from "../interface";

@Component({
  selector: "app-character-skills-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class SkillsAddEditComponent implements OnInit {
  allSkillTypes = SkillType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { skill: Readonly<Skill> },
    public dialogRef: MatDialogRef<SkillsAddEditComponent>,
  ) {
    if (data.skill) {
      /* The skill data is read only. This protects against directly
       * modifying the contents outside of the sheet service.
       *
       * Instead, we copy the name, description, and type out to allow our
       * components to edit. On dialog close, the skill data will be
       * returned as a new skill which will overwrite the existing data.
       */
      this.name = data.skill.name;
      this.description = data.skill.description;
      this.type = data.skill.type;
    }
  }

  ngOnInit(): void {}

  name: string = "";

  description: string = "";

  type: SkillType = SkillType.Trained;

  skillNameRequired = new FormControl("", [Validators.required]);

  saveAndClose(): void {
    /* don't save if there is no skill name */
    if (this.skillNameRequired.invalid) {
      return;
    }

    let skill = new Skill(this.name, this.description, this.type);

    /* close the dialog and pass back the new skill contents */
    this.dialogRef.close(skill);
  }

  getNameErrorMessage() {
    if (this.skillNameRequired.hasError("required")) {
      return "A skill name is required";
    }

    return "";
  }
}
