/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Equipment } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { EquipmentDeleteComponent } from "./delete/delete.component";
import { EquipmentAddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: "app-character-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
  equipment: Readonly<Equipment[]> = [];

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getEquipment(): void {
    this.sheet.getEquipment().subscribe((equipment) => (this.equipment = equipment));
  }

  ngOnInit(): void {
    this.getEquipment();
  }

  drop(event: CdkDragDrop<Readonly<Equipment>[]>): void {
    this.sheet.moveEquipment(event);
  }

  delete(i: number): void {
    const dialogRef = this.dialog.open(EquipmentDeleteComponent, {
      data: { equipment: this.equipment[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.deleteEquipment(i);
      }
    });
  }

  addNewEquipment(): void {
    const dialogRef = this.dialog.open(EquipmentAddEditComponent, {
      data: { equipment: undefined },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.addEquipment(result);
      }
    });
  }

  editEquipment(i: number): void {
    const dialogRef = this.dialog.open(EquipmentAddEditComponent, {
      data: { equipment: this.equipment[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.replaceEquipment(i, result);
      }
    });
  }
}
