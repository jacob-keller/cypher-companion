/** @format */

export enum SkillType {
  Inability = "Inability",
  Trained = "Trained",
  Specialized = "Specialized",
}

export class Skill {
  constructor(public name: string, public description: string, public type: SkillType) {}
}
