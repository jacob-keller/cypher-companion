/** @format */

import { Component, OnInit } from "@angular/core";
import { CharacterSheetService } from "../sheet.service";
import { Summary } from "./interface";

@Component({
  selector: "app-character-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  summary?: Summary;

  constructor(private sheet: CharacterSheetService) {}

  getSummary(): void {
    this.sheet.getSummaryData().subscribe((summary) => (this.summary = summary));
  }

  ngOnInit(): void {
    this.getSummary();
  }
}
