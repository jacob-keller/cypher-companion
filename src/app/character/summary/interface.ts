/** @format */

export class Summary {
  public name: string = "";

  public descriptor: string = "";
  public type: string = "";
  public focus: string = "";
  public flavor: string = "";

  public tier: number = 1;
  public effort: number = 1;
  public xp: number = 0;

  public currentMight: number = 0;
  public maxMight: number = 0;
  public mightEdge: number = 0;

  public currentSpeed: number = 0;
  public maxSpeed: number = 0;
  public speedEdge: number = 0;

  public currentIntellect: number = 0;
  public maxIntellect: number = 0;
  public intellectEdge: number = 0;

  public recoveryBonus: number = 0;
  public usedActionRest: boolean = false;
  public usedShortRest: boolean = false;
  public usedHourRest: boolean = false;
  public usedSleepRest: boolean = false;

  public damageImpaired: boolean = false;
  public damageDebilitated: boolean = false;

  public currencyName: string = "Gold";
  public currencyAmount: number = 0;

  public cypherLimit: number = 2;

  public armorValue: number = 0;

  public stepIncreaseCapabilities: boolean = false;
  public stepIncreaseEdge: boolean = false;
  public stepExtraEffort: boolean = false;
  public stepSkillTraining: boolean = false;
  public stepOther: boolean = false;

  constructor() {}
}
