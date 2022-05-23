/** @format */

export enum SkillType {
  Inability,
  Trained,
  Specialized,
}

export interface Skill {
  name: string;
  description: string;
  type: SkillType;
}
