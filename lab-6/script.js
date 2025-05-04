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
    this.car.style.top = `${top}px`;
    this.car.style.left = `${left}px`;
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
      this.car.style.left = `${this.#left}px`;
    }
  }

  changeStyle(css) {
    for (let key in css) {
      this.car.style[key] = css[key];
    }
  }

  moveCar(direction) {
    if (direction === "left") {
      const interval = setInterval(() => {
        this.moveLeft(10);
        if (this.#left === 0) {
          clearInterval(interval);
        }
      }, 10);
    } else if (direction === "right") {
      const maxRight = window.innerWidth - this.car.offsetWidth;
      const interval = setInterval(() => {
        this.moveRight(10);
        if (this.#left === maxRight) {
          clearInterval(interval);
        }
      }, 10);
    }
  }
}

// test
const c = new Car(100, 100, "./images/car.png");
document.body.appendChild(c.car);
c.moveCar("right");
setTimeout(() => {
  c.moveCar("left");
}, 3000);
