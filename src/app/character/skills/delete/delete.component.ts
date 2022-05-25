/** @format */

import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Skill } from "../interface";

@Component({
  selector: "app-character-skills-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class SkillsDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { skill: Readonly<Skill> },
    public dialogRef: MatDialogRef<SkillsDeleteComponent>,
  ) {}

  ngOnInit(): void {}
}
