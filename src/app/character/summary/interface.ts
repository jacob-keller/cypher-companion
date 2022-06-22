/** @format */

import { AttributePool } from "./attribute-pool/interface";
import { RecoveryRolls } from "./recovery-rolls/interface";

export class Summary {
  public name: string = "";

  public descriptor: string = "";
  public type: string = "";
  public focus: string = "";
  public flavor: string = "";

  public tier: number = 1;
  public effort: number = 1;
  public xp: number = 0;

  public might: AttributePool = new AttributePool("Might");
  public speed: AttributePool = new AttributePool("Speed");
  public intellect: AttributePool = new AttributePool("Intellect");

  public recovery: RecoveryRolls = new RecoveryRolls();

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
