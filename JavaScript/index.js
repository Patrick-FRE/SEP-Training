// // Primitive Data
// // string, number, boolean, undefined, symbol, null

// console.log('string: typeof instance === ', typeof 'string');
// console.log('number: typeof instance === ', typeof 911);
// console.log('boolean: typeof instance === ', typeof true);
// console.log('undefined: typeof instance === ', typeof undefined);

// // structural root primitive
// console.log('null: typeof instance === ', typeof null);

// var a = 5;
// function foo(input) {
//     input = 6;
//     console.log(input);  
// }
// foo(a);
// console.log(a); // 

// var b = 5;
// var c = 6;
// b = 6;
// console.log(b, c); // 

// // coercion
// console.log(true + false); // 1
// console.log(+true, +false); // toString
// console.log(typeof (1 + '')); 

// // equality == vs. ===
// console.log('911' == 911); // true
// console.log(+'911' === 911); // true

// object data
// var obj = {};
// var obj2 = Object.create({});
// console.log(obj);
// console.log(obj2);

// class MyClass {
//     constructor(name) {
//         this.name = name;
//     }
// }
// var my = new MyClass('David');
// console.log(my); // 

// var obj = {name: 'David'};
// function foo(input) {
//     input.name = 'Jojo';
//     console.log(input);
// }
// foo(obj); // 
// console.log(obj); // 

// const arr = [1, 2, 3];
// console.log(arr);

// var | let | const
// scope: function, block
// not defined and undefined

// function foo() {
//     console.log(a);
//     if (1) {
//         let a = 6;
//     }
//     console.log(a);
// }
// foo(); // 

// class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const p = new Person('David', 3);
// console.log(p);

// oop
// encapsulation

// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         this._name = newName;
//     }
//     walk() {
//         console.log('walk to company');
//     }
// }
// // inheritance
// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     walk() {
//         console.log('walk to company');
//     }
//     walk(num) {
//         console.log('walk ' + num);
//     }
// }

// const e = new Employee('David', 3, 'Antra');
// e.walk(); // 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.wolk = function() {
//     console.log('wolk');
// }

// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype);

// const e = new Employee('David', 3, 'Antra');
// console.log(e.wolk()); //

// // Polymorphism
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() { }
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }

// (new Fash('fish')).move();
// (new Bird('bird')).move();
// (new Monkey('monkey')).move();

// // Abstraction
// class Circle {
//     #pi = 3.1415926;
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getArea() {
//         return this.#pi * this.radius ** 2;
//     }
// }
// const circle1 = new Circle(20);
// console.log(circle1.getArea());
// console.log(circle1.#pi);



