/** @format */

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { CharacterSheetService } from "../sheet.service";
import { Summary } from "./interface";
import { EditSummaryComponent } from "./edit-summary/edit-summary.component";

@Component({
  selector: "app-character-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  summary?: Summary;

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog) {}

  getSummary(): void {
    this.sheet.getSummaryData().subscribe((summary) => (this.summary = summary));
  }

  ngOnInit(): void {
    this.getSummary();
  }

  editSummary(): void {
    const dialogRef = this.dialog.open(EditSummaryComponent, {
      data: { summary: this.summary },
      maxHeight: "90vh",
    });

    dialogRef.afterClosed().subscribe();
  }
}
