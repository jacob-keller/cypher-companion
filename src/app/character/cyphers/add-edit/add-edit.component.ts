/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Cypher } from "../interface";

@Component({
  selector: "app-character-cyphers-add-edit",
  templateUrl: "./add-edit.component.html",
  styleUrls: ["./add-edit.component.scss"],
})
export class CyphersAddEditComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { cypher: Readonly<Cypher> },
    public dialogRef: MatDialogRef<CyphersAddEditComponent>,
  ) {
    if (data.cypher) {
      /* The cypher data is read only. This protects against directly
       * modifying the contents outside of the sheet service.
       *
       * Instead, we copy the name, description, and level out to allow our
       * components to edit. On dialog close, the cypher data will be
       * returned as a new cypher which will overwrite the existing data.
       */
      this.name = data.cypher.name;
      this.description = data.cypher.description;
      this.level = data.cypher.level;
    }
  }

  ngOnInit(): void {}

  name: string = "";

  description: string = "";

  level: number = 1;

  cypherNameRequired = new FormControl("", [Validators.required]);

  cypherLevelRange = new FormControl("", [Validators.min(1), Validators.max(10)]);

  saveAndClose(): void {
    /* don't save if there is no cypher name */
    if (this.cypherNameRequired.invalid) {
      return;
    }

    let cypher = new Cypher(this.name, this.description, this.level);

    /* close the dialog and pass back the new cypher contents */
    this.dialogRef.close(cypher);
  }

  getNameErrorMessage() {
    if (this.cypherNameRequired.hasError("required")) {
      return "A cypher name is required";
    }

    return "";
  }

  getLevelErrorMessage() {
    if (this.cypherLevelRange.hasError("min")) {
      return "The minimum cypher level is 1";
    }
    if (this.cypherLevelRange.hasError("max")) {
      return "The maximum cypher level is 10";
    }
    return "";
  }
}
