/** @format */

import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { Equipment } from "../interface";

@Component({
  selector: "app-character-equipment-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class EquipmentDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { equipment: Readonly<Equipment> },
    public dialogRef: MatDialogRef<EquipmentDeleteComponent>,
  ) {}

  ngOnInit(): void {}
}
