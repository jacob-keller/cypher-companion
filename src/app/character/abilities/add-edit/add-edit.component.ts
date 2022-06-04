/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Ability, AbilityPool } from "../interface";

@Component({
  selector: "app-character-abilities-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class AbilitiesAddEditComponent implements OnInit {
  allAbilityPools = AbilityPool;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ability: Readonly<Ability> },
    public dialogRef: MatDialogRef<AbilitiesAddEditComponent>,
  ) {
    if (data.ability) {
      /* The ability data is read only. This protects against directly
       * modifying the contents outside of the sheet service.
       *
       * Instead, we copy the name, description, pool, and cost out to allow
       * our components to edit. On dialog close, the ability data will be
       * returned as a new ability which will overwrite the existing data.
       */
      this.name = data.ability.name;
      this.description = data.ability.description;
      this.pool = data.ability.pool;
      this.cost = data.ability.cost;
    }
  }

  ngOnInit(): void {}

  name: string = "";

  description: string = "";

  pool: AbilityPool = AbilityPool.None;

  cost: number = 0;

  abilityNameRequired = new FormControl("", [Validators.required]);

  saveAndClose(): void {
    /* don't save if there is no ability name or pool */
    if (this.abilityNameRequired.invalid) {
      return;
    }

    if (this.pool === AbilityPool.None) {
      this.cost = 0;
    }

    let ability = new Ability(this.name, this.description, this.pool, this.cost);

    /* close the dialog and pass back the new ability contents */
    this.dialogRef.close(ability);
  }

  getNameErrorMessage() {
    if (this.abilityNameRequired.hasError("required")) {
      return "An ability name is required";
    }

    return "";
  }
}
