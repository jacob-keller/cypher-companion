/** @format */

import { Injectable } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Observable, of } from "rxjs";
import { SkillType, Skill } from "./skills/interface";
import { AbilityPool, Ability } from "./abilities/interface";

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
}
