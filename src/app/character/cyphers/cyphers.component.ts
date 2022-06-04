/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Cypher } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { CyphersDeleteComponent } from "./delete/delete.component";
import { CyphersAddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: "app-character-cyphers",
  templateUrl: "./cyphers.component.html",
  styleUrls: ["./cyphers.component.scss"],
})
export class CyphersComponent implements OnInit {
  cyphers: Readonly<Cypher[]> = [];

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getCyphers(): void {
    this.sheet.getCyphers().subscribe((cyphers) => (this.cyphers = cyphers));
  }

  ngOnInit(): void {
    this.getCyphers();
  }

  cypherLimit(): number {
    return this.sheet.getCypherLimit();
  }

  drop(event: CdkDragDrop<Readonly<Cypher>[]>): void {
    this.sheet.moveCypher(event);
  }

  delete(i: number): void {
    const dialogRef = this.dialog.open(CyphersDeleteComponent, {
      data: { cypher: this.cyphers[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.deleteCypher(i);
      }
    });
  }

  addNewCypher(): void {
    const dialogRef = this.dialog.open(CyphersAddEditComponent, {
      data: { cypher: undefined },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.addCypher(result);
      }
    });
  }

  editCypher(i: number): void {
    const dialogRef = this.dialog.open(CyphersAddEditComponent, {
      data: { cypher: this.cyphers[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.replaceCypher(i, result);
      }
    });
  }
}
