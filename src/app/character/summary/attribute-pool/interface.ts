/** @format */

export class AttributePool {
  public current: number = 10;
  public maximum: number = 10;
  public edge: number = 0;

  constructor(public name: string) {}

  increment(): void {
    if (this.current >= this.maximum) {
      this.current = this.maximum;
      return;
    }

    this.current++;
  }

  decrement(): void {
    if (this.current <= 0) {
      this.current = 0;
      return;
    }

    this.current--;
  }
}
