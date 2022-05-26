/** @format */

export enum AbilityPool {
  None = "None",
  Might = "Might",
  Speed = "Speed",
  Intellect = "Intellect",
}

export class Ability {
  constructor(public name: string, public description: string, public pool: AbilityPool, public cost: number) {}
}
