/** @format */

import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Ability } from "../interface";

@Component({
  selector: "app-character-abilities-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class AbilitiesDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ability: Readonly<Ability> },
    public dialogRef: MatDialogRef<AbilitiesDeleteComponent>,
  ) {}

  ngOnInit(): void {}
}
