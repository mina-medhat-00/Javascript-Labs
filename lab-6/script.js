class Engine {
  static #count = 0;

  constructor(source) {
    if (new.target.name === "Engine") {
      throw new Error("this class cannot be instantiated");
    }
    this.source = source;
    Engine.#count++;
  }

  get source() {
    return this.source;
  }

  static getCount() {
    return Engine.#count;
  }
}

class Car extends Engine {
  constructor(top, left, source) {
    super(source);
    this.top = top;
    this.left = left;
    this.car = document.createElement("img");
    this.car.src = this.source;
    this.car.style.position = "absolute";
  }

  set top(top) {
    this.top = top;
    this.car.style.top = `${this.top}px`;
  }

  set left(left) {
    this.left = left;
    this.car.style.left = `${this.left}px`;
  }

  moveLeft(step) {
    if (Number(step) > 0) {
      this.left = Math.max(0, this.left - step);
      this.car.style.left = `${this.left}px`;
    }
  }

  moveRight(step) {
    if (Number(step) > 0) {
      const maxRight = window.innerWidth - this.car.offsetWidth;
      this.left = Math.min(maxRight, this.left + step);
      this.car.style.left = `${this.left}px`;
    }
  }

  changeStyle(css) {
    for (let key in css) {
      this.car.style.key = css[key];
    }
  }

  createMoveCar(direction) {
    if (direction === "left") {
      while (this.left > 0) {
        if (this.left < 0) {
          this.left = 0;
          return;
        }
        this.moveLeft(10);
      }
    } else if (direction === "right") {
      const maxRight = window.innerWidth - this.car.offsetWidth;
      while (this.left < maxRight) {
        if (this.left > maxRight) {
          this.left = maxRight;
          return;
        }
        this.moveRight(10);
      }
    }
  }
}
