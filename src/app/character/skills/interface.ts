/** @format */

export enum SkillType {
  Inability = -1,
  Trained = 1,
  Specialized = 2,
}

export class Skill {
  constructor(public name: string, public description: string, public type: SkillType) {}
}
