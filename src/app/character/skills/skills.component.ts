/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Skill, SkillType } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { SkillsDeleteComponent } from "./delete/delete.component";
import { SkillsAddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: "app-character-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  allSkillTypes = SkillType;

  skills: Skill[] = [];

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getSkills(): void {
    this.sheet.getSkills().subscribe((skills) => (this.skills = skills));
  }

  ngOnInit(): void {
    this.getSkills();
  }

  drop(event: CdkDragDrop<Skill[]>): void {
    this.sheet.moveSkill(event);
  }

  delete(i: number): void {
    const dialogRef = this.dialog.open(SkillsDeleteComponent, {
      data: { skillName: this.skills[i].name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.deleteSkill(i);
      }
    });
  }

  addNewSkill(): void {
    const dialogRef = this.dialog.open(SkillsAddEditComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.addSkill(result);
      }
    });
  }
}
