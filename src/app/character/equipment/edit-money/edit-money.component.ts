/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Equipment } from "../interface";

@Component({
  selector: "app-character-edit-money",
  templateUrl: "./edit-money.component.html",
  styleUrls: ["./edit-money.component.scss"],
})
export class EditMoneyComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { currencyAmount: string },
    public dialogRef: MatDialogRef<EditMoneyComponent>,
  ) {
    this.currencyAmount = data.currencyAmount;
  }

  ngOnInit(): void {}

  currencyAmount: string = "0";

  saveAndClose(): void {
    this.dialogRef.close(this.currencyAmount);
  }
}
