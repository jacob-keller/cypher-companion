/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Skill, SkillType } from "../interface";

@Component({
  selector: "app-character-skills-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class SkillsAddComponent implements OnInit {
  allSkillTypes = SkillType;

  constructor(public dialogRef: MatDialogRef<SkillsAddComponent>) {}

  ngOnInit(): void {}

  name: string = "";

  description: string = "";

  type: SkillType = SkillType.Trained;

  skillNameRequired = new FormControl("", [Validators.required]);

  saveNewSkill(): void {
    /* don't save the new skill if there is no name */
    if (this.skillNameRequired.invalid) {
      return;
    }

    let skill = new Skill(this.name, this.description, this.type);

    /* close the dialog and pass back the skill */
    this.dialogRef.close(skill);
  }

  getNameErrorMessage() {
    if (this.skillNameRequired.hasError("required")) {
      return "A skill name is required";
    }

    return "";
  }
}
