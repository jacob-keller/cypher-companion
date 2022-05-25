/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

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

  saveNewSkill(): void {
    let skill = new Skill(this.name, this.description, this.type);

    /* close the dialog and pass back the skill */
    this.dialogRef.close(skill);
  }
}
