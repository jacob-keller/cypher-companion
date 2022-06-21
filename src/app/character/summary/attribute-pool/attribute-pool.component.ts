/** @format */

import { Component, OnInit, Input } from "@angular/core";
import { AttributePool } from "./interface";

@Component({
  selector: "attribute-pool",
  templateUrl: "./attribute-pool.component.html",
  styleUrls: ["./attribute-pool.component.scss"],
})
export class AttributePoolComponent implements OnInit {
  @Input() pool!: AttributePool;

  constructor() {}

  ngOnInit(): void {}
}
