/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Equipment } from "../interface";

@Component({
  selector: "app-character-equipment-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class EquipmentAddEditComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { equipment: Readonly<Equipment> },
    public dialogRef: MatDialogRef<EquipmentAddEditComponent>,
  ) {
    if (data.equipment) {
      /* The equipment data is read only. This protects against directly
       * modifying the contents outside of the sheet service.
       *
       * Instead, we copy the name, description, level, and amount out to
       * allow our components to edit. On dialog close, the equipment data
       * will be returned as a new equipment which will overwrite the
       * existing data.
       */
      this.name = data.equipment.name;
      this.description = data.equipment.description;
      this.level = data.equipment.level;
      this.amount = data.equipment.amount;
    }
  }

  ngOnInit(): void {}

  name: string = "";

  description: string = "";

  level: number = 1;

  amount: number = 1;

  equipmentNameRequired = new FormControl("", [Validators.required]);

  equipmentLevelRange = new FormControl("", [Validators.min(1), Validators.max(10)]);

  equipmentAmountRange = new FormControl("", [Validators.min(1)]);

  saveAndClose(): void {
    /* don't save if there is no equipment name */
    if (this.equipmentNameRequired.invalid) {
      return;
    }

    let equipment = new Equipment(this.name, this.description, this.level, this.amount);

    /* close the dialog and pass back the new equipment contents */
    this.dialogRef.close(equipment);
  }

  getNameErrorMessage() {
    if (this.equipmentNameRequired.hasError("required")) {
      return "An item name is required";
    }

    return "";
  }

  getLevelErrorMessage() {
    if (this.equipmentLevelRange.hasError("min")) {
      return "The minimum equipment level is 1";
    }
    if (this.equipmentLevelRange.hasError("max")) {
      return "The maximum equipment level is 10";
    }
    return "";
  }

  getAmountErrorMessage() {
    if (this.equipmentAmountRange.hasError("min")) {
      return "You must have at least one of an item";
    }
    return "";
  }
}
