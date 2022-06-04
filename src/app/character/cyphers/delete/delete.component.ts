/** @format */

import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Cypher } from "../interface";

@Component({
  selector: "app-character-cyphers-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class CyphersDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cypher: Readonly<Cypher> },
    public dialogRef: MatDialogRef<CyphersDeleteComponent>,
  ) {}

  ngOnInit(): void {}
}
