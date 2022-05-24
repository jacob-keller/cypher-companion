/** @format */

import { Component, OnInit } from "@angular/core";
import { Skill, SkillType } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-character-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  allSkillTypes = SkillType;

  skills: Skill[] = [];

  constructor(private sheet: CharacterSheetService) {}

  getSkills(): void {
    this.sheet.getSkills().subscribe((skills) => (this.skills = skills));
  }

  ngOnInit(): void {
    this.getSkills();
  }

  drop(event: CdkDragDrop<Skill[]>) {
    this.sheet.moveSkill(event);
  }
}
