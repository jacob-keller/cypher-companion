/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Equipment } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { Summary } from "../summary/interface";
import { EquipmentDeleteComponent } from "./delete/delete.component";
import { EquipmentAddEditComponent } from "./add-edit/add-edit.component";
import { EditArmorComponent } from "./edit-armor/edit-armor.component";
import { EditMoneyComponent } from "./edit-money/edit-money.component";

@Component({
  selector: "app-character-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
  equipment: Readonly<Equipment[]> = [];
  summary?: Summary;

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getEquipment(): void {
    this.sheet.getEquipment().subscribe((equipment) => (this.equipment = equipment));
  }

  getSummary(): void {
    this.sheet.getSummaryData().subscribe((summary) => (this.summary = summary));
  }

  ngOnInit(): void {
    this.getEquipment();
    this.getSummary();
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

  armorValue(): number {
    return this.summary?.armorValue || 0;
  }

  currencyAmount(): string {
    return this.summary?.currencyAmount || "";
  }

  editArmor(): void {
    if (!this.summary) {
      return;
    }

    const dialogRef = this.dialog.open(EditArmorComponent, {
      data: { armorValue: this.summary.armorValue },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.setArmorValue(result);
      }
    });
  }

  editMoney(): void {
    if (!this.summary) {
      return;
    }

    const dialogRef = this.dialog.open(EditMoneyComponent, {
      data: { currencyAmount: this.summary.currencyAmount },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.setCurrencyAmount(result);
      }
    });
  }
}
