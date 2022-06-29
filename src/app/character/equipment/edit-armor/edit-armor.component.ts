/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-character-edit-armor",
  templateUrl: "./edit-armor.component.html",
  styleUrls: ["./edit-armor.component.scss"],
})
export class EditArmorComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { armorValue: number },
    public dialogRef: MatDialogRef<EditArmorComponent>,
  ) {
    this.armorValue = data.armorValue;
  }

  ngOnInit(): void {}

  armorValue: number = 0;

  saveAndClose(): void {
    this.dialogRef.close(this.armorValue);
  }
}
