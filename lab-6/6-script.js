// block scope
// array new features
// enhanced object literals
// oop (constructor function -- classes es6)
// destructing array and objects

// block scope -> {}
// any variable declared with let or const has block level scope

// for (var i = 0; i < 3; i++) {}
// console.log(i); //3

// for (let i = 0; i < 3; i++) {}
// console.log(i); //not defined

// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i)); // 3 3 3
// }

// console.log("--------------------------");

// for (let i = 0; i < 3; i++) {
//   console.log("hello");
//   setTimeout(() => console.log(i)); // 0 1 2
// }

// memory
// 0x11 -> var i =3
// 0x12 -> let i= 0
// 0x13 i =1
// 0x14 i =2
// var vName = "john";
// let lName = "doe";
// console.log(window.vName);
// console.log(window.lName);
// let street = "10 st.louis city";
// let city = "cairo";

// let address = {
//   street: street,
//   city: city,
// };
// let address = {
//   street,
//   city,
// };

// concise method
// let address = {
//   street,
//   city,
//   print() {
//     console.log(this.street);
//   },
// };

// constructor function (ES5)
// function Person(_name, _age) {
//   this.name = _name;
//   this.age = _age;
//   //   this.printData = () => console.log(`hello ${this.name}`);
// }

// let person1 = new Person("john", 50);
// // prototype inheritance
// Person.prototype.printData = function () {
//   return `hello my name is ${this.name} and my age is ${this.age}`;
// };

// class declarations

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   printData() {
//     console.log(`hello ${this.name}`);
//   }
// }

// let person1 = new Person("john", 50);

// class Person {
//   name = "ismael"; // public member
//   age = 50;
//   #id = 1; // private member
//   static count = 0;
//   constructor(_name, _age) {
//     Person.count++;
//     this.name = _name;
//     this.age = _age;
//   }
//   printData() {
//     console.log(`hello ${this.name}`);
//   }
//   get getId() {
//     return this.#id;
//   }
//   set setId(value) {
//     this.#id = value;
//   }
//   static personInfo() {
//     console.log("the method belong to Person class");
//   }
// }

// let person1 = new Person("john", 50);
// console.log(Person.count);
// inheritance in class

// class Shape {
//   constructor(length, width) {
//     if (new.target.name === "Shape")
//       throw new Error("this class cannot be instantiated");
//     this.length = length;
//     this.width = width;
//   }
//   getArea() {
//     return this.length * this.width * 2;
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, width) {
//     super(length, width);
//   }
//   getArea() {
//     return this.length * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//   }
// }

// let shape = new Shape();
// let rectangle = new Rectangle(3, 4);
// console.log(rectangle instanceof Shape); // true
// console.log(square.getArea()); // 9
// console.log(square instanceof Rectangle); // true

// new static array method (Array.of() - Array.from())
// let arr = new Array(3); // [empty x3]
// console.log(arr.length);
// console.log(arr[0]);
// arr = new Array("2");
// console.log(arr.length); // 1
// console.log(arr); // ['2']
// let arr = Array.of(3);
// console.log(arr.length);
// console.log(arr);
// let arr = Array.of("2");
// console.log(arr.length); // 1
// console.log(arr); // ['2']
// Array.from

// function printAllArgs() {
//   let arr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   console.log(arr);
// }

// function printAllArgs() {
//   let arr = Array.from(arguments, (elem) => {
//     return elem * elem;
//   });
//   console.log(arr);
// }
// object destructuring
// let obj = {
//   first_name: "john",
//   age: 55,
//   salary: 3000,
//   address: 9898,
// };
// let { first_name: fName, salary, address: street = 10 } = obj;
// console.log(fName);
// console.log(salary);
// console.log(street);

// Array destructuring
// let salaries = [5000, 10000];
// let [low, medium, high = 90000] = salaries;
// let nums = [5, 9, [5, 10]];
// let [x, y, [z, a, e = 900000]] = nums;
