/** @format */

import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { saveAs } from "file-saver";

import { MessageService } from "./message.service";

import { CharacterSheetService } from "../sheet.service";
import { Summary } from "./interface";
import { EditSummaryComponent } from "./edit-summary/edit-summary.component";

/* This is needed for require("sanitize-filename") */
declare var require: any;

@Component({
  selector: "app-character-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  summary?: Summary;

  constructor(private sheet: CharacterSheetService, public dialog: MatDialog, public messageService: MessageService) {}

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

    dialogRef.afterClosed().subscribe((result) => this.sheet.save());
  }

  exportCharacterJSON(): void {
    /* Get a safe filename based on the date and character name */
    let sanitize = require("sanitize-filename");
    let now = new Date();
    let day = now.toISOString().split("T")[0];
    let name = sanitize(this.summary?.name || "character");
    let fileName = `${name}-${day}`;

    let fileToSave = new Blob([this.sheet.toJSON()], {
      type: "application/json",
    });

    saveAs(fileToSave, fileName);
  }

  importCharacterJSON(input: HTMLInputElement): void {
    if (!input.files) {
      this.messageService.add("File not found");
      return;
    }

    let file = input.files[0];
    let reader = new FileReader();
    let sheet = this.sheet;
    let messages = this.messageService;

    reader.onload = function () {
      if (reader.result) {
        sheet.fromJSON(reader.result as string);
      }
    };

    reader.onerror = function () {
      messages.add("Unable to load JSON file");
    };

    /* Read the file as text */
    reader.readAsText(file);

    /* Clear the file list */
    input.value = "";
  }
}
