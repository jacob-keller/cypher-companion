/** @format */

import { Component, OnInit } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";

import { Ability, AbilityPool } from "./interface";
import { CharacterSheetService } from "../sheet.service";
import { AbilitiesDeleteComponent } from "./delete/delete.component";
import { AbilitiesAddEditComponent } from "./add-edit/add-edit.component";

@Component({
  selector: "app-character-abilities",
  templateUrl: "./abilities.component.html",
  styleUrls: ["./abilities.component.scss"],
})
export class AbilitiesComponent implements OnInit {
  allAbilityPools = AbilityPool;

  abilities: Readonly<Ability[]> = [];

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getAbilities(): void {
    this.sheet.getAbilities().subscribe((abilities) => (this.abilities = abilities));
  }

  ngOnInit(): void {
    this.getAbilities();
  }

  drop(event: CdkDragDrop<Readonly<Ability>[]>): void {
    this.sheet.moveAbility(event);
  }

  delete(i: number): void {
    const dialogRef = this.dialog.open(AbilitiesDeleteComponent, {
      data: { ability: this.abilities[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.deleteAbility(i);
      }
    });
  }

  addNewAbility(): void {
    const dialogRef = this.dialog.open(AbilitiesAddEditComponent, {
      data: { ability: undefined },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.addAbility(result);
      }
    });
  }

  editAbility(i: number): void {
    const dialogRef = this.dialog.open(AbilitiesAddEditComponent, {
      data: { ability: this.abilities[i] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sheet.replaceAbility(i, result);
      }
    });
  }
}
