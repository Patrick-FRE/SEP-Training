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

//          var       | let    | const  | function
// hoisting: yes(fn),   no(b),   no(b),   yes(fn),
// reasign:  yes,       yes,     no,      yes


// not defined and undefined

// function foo() {
//     console.log(a);
//     if (1) {
//         let a = 6;
//     }
//     console.log(a);
// }
// foo(); // 

// // class
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

// ES2019 #
// class Person {
//     #name = 'Dio';
//     #age = 200;

//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     get age() {
//         return this.#age;
//     }
//     set age(newAge) {
//         this.#age = newAge;
//     }
//     walk() {
//         console.log('walk around the world!');
//     }
// }

// const p = new Person();
// p.name = 'Jojo'
// console.log(p);
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

// Polymorphism
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() { 
//         console.log('move')
//     }
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

// // iife

// const fish = new Fash('fish');
// fish.move();

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// loop array;

// const arr = [1, 2, 3]; 
// // for, for of
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let num of arr) {
//     console.log(num);
// }
// forEach, map, difference?

// console.log(arr.forEach(function(ele, index, oarr) {
//     console.log(ele, index, oarr);
//     if (ele === 2) {
//         return 2;
//     }
// }));
// console.log(arr.map(function(ele, index, oarr) {
//     console.log(ele, index, oarr);
//     if (ele !== 2) {
//         return 2;
//     }
// })); // can we return in the forEach, what does forEach return?

// const arr = [1, 2, 3]; 

// console.log(arr.map(function(ele, index, oarr) {
//     if (ele === 2) {
//         return 2;
//     }
// })); // [undefined, 2, undefined]

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// Array.prototype.myMap = function(callback) {
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this));
//     }
//     return res;
// }

// Array.prototype.myFilter = function (callback) {
//     const cb = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             cb.push(this[i]);
//         };
//     }
//     return cb;
// }
// const arr = [2, 2, 3, 4];
// const cb = ele => ele === 2;
// console.log(arr.myFilter(cb));

// some, every

// reduce

// Array.prototype.myReduce = function (callback, initAcc) {
//     let acc = initAcc;
//     for (let i = 0; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }
//     return acc;
// }

// console.log([1, 2, 3].myReduce((acc, cur, i, oarr) => {
//     acc.push(cur, cur);
//     return acc;
// }, [])) // [1, 1, 2, 2, 3, 3]

// Object forEach

// const obj = { name: 'Dio', age: 200 };

// Object forEach, Array forEach
// for (let key in obj) {
//     console.log(obj[key]);
// }

// const arr = [1, 2, 3];
// arr.forEach()

// spread operator, rest parameters;   
// function foo(num, num2, ...args) {
//     console.log(args);

// }
// foo(1, 2, 3, 4);

// const obj = { name: 'Dio', age: 200 };
// const obj2 = {...obj};

// console.log(obj2 === obj);

// console.log(obj, obj2)

// const foo = input => {
//     const set = new Set([...input]);
//     return [...set].join('');
// }
// console.log(foo('qwerqwe'));

// shadow copy, deep copy
const obj = { 
    name: 'Dio', 
    age: 200, 
    date: new Date,
    arr: [
        {date: new Date}
    ]
}
// const obj2 = {...obj};

const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj, obj2);
