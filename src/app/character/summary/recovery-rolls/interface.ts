/** @format */

export class Roll {
  public used: boolean = false;

  constructor(public name: string) {}
}

export class RecoveryRolls {
  public rollBonus: number = 0;

  public rolls: Roll[] = [new Roll("Action"), new Roll("10 Mins"), new Roll("1 Hour"), new Roll("10 Hours")];

  constructor() {}
}
