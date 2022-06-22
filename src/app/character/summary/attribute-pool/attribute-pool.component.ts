/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { CharacterSheetService } from "../../sheet.service";
import { AttributePool } from "./interface";

@Component({
  selector: "attribute-pool",
  templateUrl: "./attribute-pool.component.html",
  styleUrls: ["./attribute-pool.component.scss"],
})
export class AttributePoolComponent implements OnInit {
  @Input() pool?: AttributePool;

  constructor(private sheet: CharacterSheetService) {}

  ngOnInit(): void {}

  increment(): void {
    this.pool?.increment();
  }

  decrement(): void {
    this.pool?.decrement();
  }
}
