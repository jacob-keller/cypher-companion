/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-character-edit-cypher-limit",
  templateUrl: "./edit-cypher-limit.component.html",
  styleUrls: ["./edit-cypher-limit.component.scss"],
})
export class EditCypherLimitComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cypherLimit: string },
    public dialogRef: MatDialogRef<EditCypherLimitComponent>,
  ) {
    this.cypherLimit = data.cypherLimit;
  }

  ngOnInit(): void {}

  cypherLimit: string = "0";

  saveAndClose(): void {
    this.dialogRef.close(this.cypherLimit);
  }
}
