/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { CharacterSheetService } from "../../sheet.service";
import { Summary } from "../interface";

@Component({
  selector: "recovery-rolls",
  templateUrl: "./recovery-rolls.component.html",
  styleUrls: ["./recovery-rolls.component.scss"],
})
export class RecoveryRollsComponent implements OnInit {
  @Input() summary?: Summary;

  constructor() {}

  ngOnInit(): void {}

  saveCharacterSheet(): void {}
}
