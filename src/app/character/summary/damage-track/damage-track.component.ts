/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { CharacterSheetService } from "../../sheet.service";
import { Summary } from "../interface";
import { DamageCategory } from "./interface";

@Component({
  selector: "damage-track",
  templateUrl: "./damage-track.component.html",
  styleUrls: ["./damage-track.component.scss"],
})
export class DamageTrackComponent implements OnInit {
  allDamageCategories = DamageCategory;

  @Input() summary?: Summary;

  constructor() {}

  ngOnInit(): void {}

  saveCharacterSheet(): void {}
}
