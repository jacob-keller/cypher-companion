/** @format */

import { Injectable } from "@angular/core";
import { SkillType, Skill } from "./skills/interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterSheetService {
  // Hard coded for meow using Red's list. Eventually move this to local
  // storage with buttons to add/remove
  private skills: Skill[] = [
    {
      name: "Intellect Defense",
      description:
        "Combat skill granting training for intellect defense rolls such as mental assaults or personality overrides.",
      type: SkillType.Trained,
    },
    {
      name: "Discerning Truth",
      description: "Skill in determining truth from lies or fiction, such as conversations or stories.",
      type: SkillType.Trained,
    },
    {
      name: "Piercing Disguises",
      description: "Skill in seeing through or recognizing a disguise.",
      type: SkillType.Trained,
    },
    {
      name: "Recognizing Deception",
      description: "Skill in recognizing deception or someone attempting to decieve you.",
      type: SkillType.Trained,
    },
    {
      name: "Deception and Persuasion",
      description: "Inability to persuade or decieve others.",
      type: SkillType.Inability,
    },
  ];

  constructor() {}

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
