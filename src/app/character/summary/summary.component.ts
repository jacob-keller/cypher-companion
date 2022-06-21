/** @format */

import { Component, OnInit } from "@angular/core";
import { CharacterSheetService } from "../sheet.service";
import { AttributePool } from "./attribute-pool/interface";

@Component({
  selector: "app-character-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  might!: AttributePool;
  speed!: AttributePool;
  intellect!: AttributePool;

  constructor(private sheet: CharacterSheetService) {}

  ngOnInit(): void {
    this.might = this.sheet.getMightPool();
    this.speed = this.sheet.getSpeedPool();
    this.intellect = this.sheet.getIntellectPool();
  }
}
