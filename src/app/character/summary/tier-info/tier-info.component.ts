/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { CharacterSheetService } from "../../sheet.service";
import { Summary } from "../interface";

@Component({
  selector: "tier-info",
  templateUrl: "./tier-info.component.html",
  styleUrls: ["./tier-info.component.scss"],
})
export class TierInfoComponent implements OnInit {
  @Input() summary?: Summary;

  constructor(private sheet: CharacterSheetService) {}

  ngOnInit(): void {}

  incrementXP(): void {
    if (this.summary === undefined) {
      return;
    }

    this.summary.xp++;
  }

  decrementXP(): void {
    if (this.summary === undefined) {
      return;
    }

    if (this.summary.xp <= 0) {
      this.summary.xp = 0;
      return;
    }
    this.summary.xp--;
  }
}
