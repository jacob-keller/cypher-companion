/** @format */

import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable, of, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import { MessageService } from "./summary/message.service";

import { SkillType, Skill } from "./skills/interface";
import { AbilityPool, Ability } from "./abilities/interface";
import { Cypher } from "./cyphers/interface";
import { Equipment } from "./equipment/interface";
import { Note } from "./notes/interface";
import { Summary } from "./summary/interface";
import { AttributePool } from "./summary/attribute-pool/interface";
import { Roll } from "./summary/recovery-rolls/interface";

class Sheet {
  /* Version to support loading old sheet data */
  public version: number = 1;

  public skills?: Skill[];
  public abilities?: Ability[];
  public cyphers?: Cypher[];
  public equipment?: Equipment[];
  public notes?: Note[];
  public summary?: Summary;

  constructor() {}
}

@Injectable({
  providedIn: "root",
})
export class CharacterSheetService {
  private saveObserver: Observable<null>;
  private saveThrottler = new Subject<null>();

  constructor(public messageService: MessageService) {
    /* Load saved data if we have any */
    this.loadFromStorage();

    this.saveObserver = this.saveThrottler.pipe(debounceTime(500));

    const subscriber = this.saveObserver.subscribe((result) => {
      this.saveToStorage();
    });
  }

  private saveToStorage() {
    var sheetJSON = this.toJSON();

    window.localStorage.setItem("cypher-companion-data", sheetJSON);
  }

  private loadFromStorage() {
    var sheetJSON = window.localStorage.getItem("cypher-companion-data");

    if (sheetJSON) {
      this.fromJSON(sheetJSON);
    }
  }

  save() {
    this.saveThrottler.next(null);
  }

  /*
   * Skills
   */
  private skills: Skill[] = [];

  getSkills(): Observable<Readonly<Skill[]>> {
    return of(this.skills);
  }

  moveSkill(event: CdkDragDrop<Skill[]>): void {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
    this.save();
  }

  deleteSkill(i: number): void {
    this.skills.splice(i, 1);
    this.save();
  }

  addSkill(skill: Skill): void {
    this.skills.push(skill);
    this.save();
  }

  replaceSkill(i: number, newSkill: Skill): void {
    this.skills[i] = newSkill;
    this.save();
  }

  /*
   * Abilities
   */
  private abilities: Ability[] = [];

  getAbilities(): Observable<Readonly<Ability[]>> {
    return of(this.abilities);
  }

  moveAbility(event: CdkDragDrop<Ability[]>): void {
    moveItemInArray(this.abilities, event.previousIndex, event.currentIndex);
    this.save();
  }

  deleteAbility(i: number): void {
    this.abilities.splice(i, 1);
    this.save();
  }

  addAbility(ability: Ability): void {
    this.abilities.push(ability);
    this.save();
  }

  replaceAbility(i: number, newAbility: Ability): void {
    this.abilities[i] = newAbility;
    this.save();
  }

  /*
   * Cyphers
   */
  private cyphers: Cypher[] = [];

  getCyphers(): Observable<Readonly<Cypher[]>> {
    return of(this.cyphers);
  }

  moveCypher(event: CdkDragDrop<Cypher[]>): void {
    moveItemInArray(this.cyphers, event.previousIndex, event.currentIndex);
    this.save();
  }

  deleteCypher(i: number): void {
    this.cyphers.splice(i, 1);
    this.save();
  }

  addCypher(cypher: Cypher): void {
    this.cyphers.push(cypher);
    this.save();
  }

  replaceCypher(i: number, newCypher: Cypher): void {
    this.cyphers[i] = newCypher;
    this.save();
  }

  setCypherLimit(cypherLimit: number): void {
    this.summary.cypherLimit = cypherLimit;
    this.save();
  }

  /*
   * Equipment
   */
  private equipment: Equipment[] = [];

  getEquipment(): Observable<Readonly<Equipment[]>> {
    return of(this.equipment);
  }

  moveEquipment(event: CdkDragDrop<Equipment[]>): void {
    moveItemInArray(this.equipment, event.previousIndex, event.currentIndex);
    this.save();
  }

  deleteEquipment(i: number): void {
    this.equipment.splice(i, 1);
    this.save();
  }

  addEquipment(equipment: Equipment): void {
    this.equipment.push(equipment);
    this.save();
  }

  replaceEquipment(i: number, newEquipment: Equipment): void {
    this.equipment[i] = newEquipment;
    this.save();
  }

  setArmorValue(armorValue: number) {
    this.summary.armorValue = armorValue;
    this.save();
  }

  setCurrencyAmount(currencyAmount: string) {
    this.summary.currencyAmount = currencyAmount;
    this.save();
  }

  /*
   * Notes
   */
  private notes: Note[] = [];

  getNotes(): Observable<Readonly<Note[]>> {
    return of(this.notes);
  }

  moveNote(event: CdkDragDrop<Note[]>): void {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    this.save();
  }

  deleteNote(i: number): void {
    this.notes.splice(i, 1);
    this.save();
  }

  addNote(note: Note): void {
    this.notes.push(note);
    this.save();
  }

  replaceNote(i: number, newNote: Note): void {
    this.notes[i] = newNote;
    this.save();
  }

  /*
   * Summary
   */

  private summary: Summary = new Summary();

  getSummaryData(): Observable<Summary> {
    return of(this.summary);
  }

  /*
   * Saving and Loading
   */

  toJSON(): string {
    var sheet: Sheet = new Sheet();

    sheet.skills = this.skills;
    sheet.abilities = this.abilities;
    sheet.cyphers = this.cyphers;
    sheet.equipment = this.equipment;
    sheet.notes = this.notes;
    sheet.summary = this.summary;

    return JSON.stringify(sheet, null, 4);
  }

  fromSheetVersion1(sheet: any) {
    /* Update the sheet data from this object. Note that we must be careful
     * to modify the objects in place, rather than creating new references.
     * This is critical to ensure every view updates as expected.
     */

    /* Skills */
    this.skills.length = 0;
    sheet.skills.forEach((item: Skill) => {
      this.addSkill(item);
    });

    /* Abilities */
    this.abilities.length = 0;
    sheet.abilities.forEach((item: Ability) => {
      this.addAbility(item);
    });

    /* Cyphers */
    this.cyphers.length = 0;
    sheet.cyphers.forEach((item: Cypher) => {
      this.addCypher(item);
    });

    /* Equipment */
    this.equipment.length = 0;
    sheet.equipment.forEach((item: Equipment) => {
      this.addEquipment(item);
    });

    /* Notes */
    this.notes.length = 0;
    sheet.notes.forEach((item: Note) => {
      this.addNote(item);
    });

    /* Summary */
    this.summary.name = sheet.summary.name;
    this.summary.descriptor = sheet.summary.descriptor;
    this.summary.type = sheet.summary.type;
    this.summary.focus = sheet.summary.focus;
    this.summary.flavor = sheet.summary.flavor;

    this.summary.tier = sheet.summary.tier;
    this.summary.effort = sheet.summary.effort;
    this.summary.xp = sheet.summary.xp;

    this.summary.might.current = sheet.summary.might.current;
    this.summary.might.maximum = sheet.summary.might.maximum;
    this.summary.might.edge = sheet.summary.might.edge;

    this.summary.speed.current = sheet.summary.speed.current;
    this.summary.speed.maximum = sheet.summary.speed.maximum;
    this.summary.speed.edge = sheet.summary.speed.edge;

    this.summary.intellect.current = sheet.summary.intellect.current;
    this.summary.intellect.maximum = sheet.summary.intellect.maximum;
    this.summary.intellect.edge = sheet.summary.intellect.edge;

    this.summary.recovery.rollBonus = sheet.summary.recovery.rollBonus;
    this.summary.recovery.rolls.length = 0;
    sheet.summary.recovery.rolls.forEach((item: Roll) => {
      this.summary.recovery.rolls.push(item);
    });

    this.summary.damageTrack.category = sheet.summary.damageTrack.category;

    this.summary.currencyAmount = sheet.summary.currencyAmount;
    this.summary.cypherLimit = sheet.summary.cypherLimit;
    this.summary.armorValue = sheet.summary.armorValue;

    this.summary.stepIncreaseCapabilities = sheet.summary.stepIncreaseCapabilities;
    this.summary.stepIncreaseEdge = sheet.summary.stepIncreaseEdge;
    this.summary.stepExtraEffort = sheet.summary.stepExtraEffort;
    this.summary.stepSkillTraining = sheet.summary.stepSkillTraining;
    this.summary.stepOther = sheet.summary.stepOther;

    this.save();
  }

  fromJSON(sheetJSON: string) {
    var sheet: any = JSON.parse(sheetJSON);

    if (sheet.version === 1) {
      this.fromSheetVersion1(sheet);
    } else {
      this.messageService.add(`Unrecognized character sheet version '${sheet.version}'`);
    }
  }
}
