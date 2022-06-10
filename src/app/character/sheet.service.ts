/** @format */

import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable, of } from "rxjs";
import { SkillType, Skill } from "./skills/interface";
import { AbilityPool, Ability } from "./abilities/interface";
import { Cypher } from "./cyphers/interface";
import { Equipment } from "./equipment/interface";
import { Summary } from "./summary/interface";

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

  /*
   * Summary
   */

  private summary: Summary = new Summary(2);

  getCypherLimit(): number {
    return this.summary.cypherLimit;
  }
}
