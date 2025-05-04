class Engine {
  static #count = 0;

  constructor(source) {
    if (new.target.name === "Engine") {
      throw new Error("this class cannot be instantiated");
    }
    this.source = source;
    Engine.#count++;
  }

  get sourceGetter() {
    return this.source;
  }

  static getCount() {
    return Engine.#count;
  }
}

class Car extends Engine {
  #top = 0;
  #left = 0;

  constructor(top, left, source) {
    super(source);
    this.#top = top;
    this.#left = left;
    this.car = document.createElement("img");
    this.car.src = this.source;
    this.car.style.position = "absolute";
  }

  set top(value) {
    this.#top = value;
    this.car.style.top = `${this.#top}px`;
  }

  get top() {
    return this.#top;
  }

  set left(value) {
    this.#left = value;
    this.car.style.left = `${this.#left}px`;
  }

  get left() {
    return this.#left;
  }

  moveLeft(step) {
    if (Number(step) > 0) {
      this.#left = Math.max(0, this.#left - step);
      this.car.style.left = `${this.left}px`;
    }
  }

  moveRight(step) {
    if (Number(step) > 0) {
      const maxRight = window.innerWidth - this.car.offsetWidth;
      this.#left = Math.min(maxRight, this.#left + step);
      this.car.style.left = `${this.left}px`;
    }
  }

  changeStyle(css) {
    for (let key in css) {
      this.car.style.key = css[key];
    }
  }

  moveCar(direction) {
    if (direction === "left") {
      while (this.#left > 0) {
        if (this.#left < 0) {
          this.#left = 0;
          return;
        }
        this.moveLeft(10);
      }
    } else if (direction === "right") {
      const maxRight = window.innerWidth - this.car.offsetWidth;
      while (this.#left < maxRight) {
        if (this.#left > maxRight) {
          this.#left = maxRight;
          return;
        }
        this.moveRight(10);
      }
    }
  }
}

const c = new Car(0, 0, "./images/car.png");
document.body.appendChild(c.car);
