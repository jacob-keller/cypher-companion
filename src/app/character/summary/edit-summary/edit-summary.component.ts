/** @format */

import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, Validators } from "@angular/forms";

import { Summary } from "../interface";

@Component({
  selector: "app-character-edit-summary",
  templateUrl: "./edit-summary.component.html",
  styleUrls: ["./edit-summary.component.scss"],
})
export class EditSummaryComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { summary: Summary },
    public dialogRef: MatDialogRef<EditSummaryComponent>,
  ) {
    if (data.summary) {
      /* Copy out the relevant data to avoid inline editing the summary
       * object
       */
      this.name = data.summary.name;
      this.descriptor = data.summary.descriptor;
      this.type = data.summary.type;
      this.focus = data.summary.focus;
      this.flavor = data.summary.flavor;

      this.mightMax = data.summary.might.maximum;
      this.mightEdge = data.summary.might.edge;
      this.speedMax = data.summary.speed.maximum;
      this.speedEdge = data.summary.speed.edge;
      this.intellectMax = data.summary.intellect.maximum;
      this.intellectEdge = data.summary.intellect.edge;

      this.stepIncreaseCapabilities = data.summary.stepIncreaseCapabilities;
      this.stepIncreaseEdge = data.summary.stepIncreaseEdge;
      this.stepExtraEffort = data.summary.stepExtraEffort;
      this.stepSkillTraining = data.summary.stepSkillTraining;
      this.stepOther = data.summary.stepOther;
    }
  }

  ngOnInit(): void {}

  public name: string = "";

  public descriptor: string = "";
  public type: string = "";
  public focus: string = "";
  public flavor: string = "";

  public tier: number = 1;
  public effort: number = 1;

  public mightMax: number = 0;
  public mightEdge: number = 0;
  public speedMax: number = 0;
  public speedEdge: number = 0;
  public intellectMax: number = 0;
  public intellectEdge: number = 0;

  public currencyAmount: string = "0";
  public armorValue: number = 0;
  public cypherLimit: number = 2;

  public stepIncreaseCapabilities: boolean = false;
  public stepIncreaseEdge: boolean = false;
  public stepExtraEffort: boolean = false;
  public stepSkillTraining: boolean = false;
  public stepOther: boolean = false;

  saveAndClose(): void {
    /* explcit member-by-member copy is ugly... */
    this.data.summary.name = this.name;
    this.data.summary.descriptor = this.descriptor;
    this.data.summary.type = this.type;
    this.data.summary.focus = this.focus;
    this.data.summary.flavor = this.flavor;

    this.data.summary.might.maximum = this.mightMax;
    this.data.summary.might.edge = this.mightEdge;
    this.data.summary.speed.maximum = this.speedMax;
    this.data.summary.speed.edge = this.speedEdge;
    this.data.summary.intellect.maximum = this.intellectMax;
    this.data.summary.intellect.edge = this.intellectEdge;

    this.data.summary.stepIncreaseCapabilities = this.stepIncreaseCapabilities;
    this.data.summary.stepIncreaseEdge = this.stepIncreaseEdge;
    this.data.summary.stepExtraEffort = this.stepExtraEffort;
    this.data.summary.stepSkillTraining = this.stepSkillTraining;
    this.data.summary.stepOther = this.stepOther;

    this.dialogRef.close();
  }
}
