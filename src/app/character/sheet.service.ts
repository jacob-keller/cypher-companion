/** @format */

import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable, of } from "rxjs";
import { SkillType, Skill } from "./skills/interface";
import { AbilityPool, Ability } from "./abilities/interface";
import { Cypher } from "./cyphers/interface";
import { Equipment } from "./equipment/interface";
import { Note } from "./notes/interface";
import { Summary } from "./summary/interface";
import { AttributePool } from "./summary/attribute-pool/interface";

@Injectable({
  providedIn: "root",
})
export class CharacterSheetService {
  constructor() {}

  /*
   * Skills
   */
  private skills: Skill[] = [];

  getSkills(): Observable<Readonly<Skill[]>> {
    return of(this.skills);
  }

  moveSkill(event: CdkDragDrop<Skill[]>): void {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

  deleteSkill(i: number): void {
    this.skills.splice(i, 1);
  }

  addSkill(skill: Skill): void {
    this.skills.push(skill);
  }

  replaceSkill(i: number, newSkill: Skill): void {
    this.skills[i] = newSkill;
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
  }

  deleteAbility(i: number): void {
    this.abilities.splice(i, 1);
  }

  addAbility(ability: Ability): void {
    this.abilities.push(ability);
  }

  replaceAbility(i: number, newAbility: Ability): void {
    this.abilities[i] = newAbility;
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
  }

  deleteCypher(i: number): void {
    this.cyphers.splice(i, 1);
  }

  addCypher(cypher: Cypher): void {
    this.cyphers.push(cypher);
  }

  replaceCypher(i: number, newCypher: Cypher): void {
    this.cyphers[i] = newCypher;
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
  }

  deleteEquipment(i: number): void {
    this.equipment.splice(i, 1);
  }

  addEquipment(equipment: Equipment): void {
    this.equipment.push(equipment);
  }

  replaceEquipment(i: number, newEquipment: Equipment): void {
    this.equipment[i] = newEquipment;
  }

  setArmorValue(armorValue: number) {
    this.summary.armorValue = armorValue;
  }

  setCurrencyAmount(currencyAmount: string) {
    this.summary.currencyAmount = currencyAmount;
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
  }

  deleteNote(i: number): void {
    this.notes.splice(i, 1);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  replaceNote(i: number, newNote: Note): void {
    this.notes[i] = newNote;
  }

  /*
   * Summary
   */

  private summary: Summary = new Summary();

  getSummaryData(): Observable<Summary> {
    return of(this.summary);
  }
}
