import { Car } from "./car.js";

export class FlyingCar extends Car {
  constructor(model, year) {
    super(model, year);
    this.canFly = true;
  }
  toString() {
    const parentToString = super.toString();
    return `${parentToString}, I can fly`;
  }
}
