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
// console.log(p.#name);

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

// ES6 spread operator, rest parameters;
// function foo(num, num2, ...args) {
//     console.log(args);

// }
// foo(1, 2, 3, 4);

// const obj = { name: 'Dio', age: 200 };
// const obj2 = {...obj};

// const name = 'Dio';
// const age = 200;
// const obj = { name, age};
// console.log(obj);

// console.log(obj2 === obj);

// console.log(obj, obj2)

// const foo = input => {
//     const set = new Set([...input]);
//     return [...set].join('');
// }
// console.log(foo('qwerqwe'));

// // shadow copy, deep copy
// const obj = {
//     name: 'Dio',
//     age: 200,
//     date: new Date,
//     arr: [
//         {date: new Date}
//     ]
// }
// // const obj2 = {...obj};

// const obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj, obj2);

// function foo(input) {
//     input++;
//     return input;
// }
// function bar(input) {
//     let res = input;
//     res++;
//     return res;
// }

// typeof

// const arr = {};
// console.log(arr.__proto__.constructor.toString().indexOf('Array') > -1);

// ES6 destructure
// const obj = { name: 'Dio', age: 200 };
// const {name, age} = { name: 'Dio', age: 200 };

// const arr = [
//     { name: 'Dio' },
//     (data) => {
//         arr[0] = {...arr[0], ...data}
//     }
// ];

// const [state, setState] = arr;
// setState({age: 200});
// console.log(state);

// this:
// global this;

// function foo() {
//     console.log(this);
// }
// foo();

// object owning the method;
// const obj = {
//     foo() {
//         console.log(this);
//     }
// };
// obj.foo()

// newly created instance;
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     bar() { console.log(this)}
// }
// const p = new Person('Dio');
// p.bar();
// console.log(p);

// call, apply, bind
// const obj = {
//     pi: 3.1415926,
//     getPi: function() {
//         return this.pi;
//     }
// };
// function foo(circle, radius) {
//     console.log(circle, 'is a circle.', 'the area is', this.getPi() * (radius ** 2));
//     // console.log(circle + ' is a circle. ' + 'the area is ' + this.getPi() * (radius ** 2));
//     // console.log(`${circle} is a circle. the area is ${this.getPi() * (radius ** 2)}`);
// }
// // const bar = foo.bind(obj);
// // bar('Dio', 2);

// foo.call(obj, 'Jojo', 4);
// foo.apply(obj, ['Jojo', 4]);

// ES6 arrow function:

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
// const myObj = {
//     myMethod(item) {
//         console.log(this);
//         // const foo = function() {
//         //     console.log(this)
//         // }.bind(this);

//         item.forEach(() => {
//             console.log(this)
//         });
//     }
// }
// myObj.myMethod([1]); //

// arrow constructor function
// const Car = (color) => {
//     this.color = color;
// }
// const car = new Car('red');
// console.log(car);

// function foo() {
//     console.log(arguments);
//     // const bar = function() {
//     //     console.log(arguments);
//     // };
//     const bar = () => {
//         console.log(arguments);
//     };
//     bar('c', 'd');
// }
// foo('a', 'b');

// closure

// console.log(foo(4)(5)) // 9
// function foo(num1) {
//     return function(num2) {
//         return num1 + num2;
//     }
// }
// const bar = ((function() {
//     let a = 5;
//     return function() {
//         return a;
//     }
// }))();
// console.log(bar());

// const limitedFunction = (num, cb) => {
//     let counter = 0;
//     return (...args) => {
//         if (counter === num) {
//             console.log('over limited');
//         } else {
//             cb(...args);
//             counter++;
//         }
//     }
// }
// const fn = limitedFunction(3, (a, b) => console.log(a + b));
// fn(2, 3);
// fn(2, 3);
// fn(2, 3);
// fn(2, 3);

// const foo = (...arg1) => (...arg2) => (...arg3) => {
//     return [...arg1, ...arg2, ...arg3].reduce((acc, cur) => acc + cur);
// }

// console.log(foo(4, 23, 12)(2)(12, 1)); // 4 + 23 + 12 + 2 + 12 + 1
// console.log(foo(3)(45, 1)());

// async
// event loop: call stack, async API, message queue

// function foo() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => console.log(i), (5 - i) * 1000);
//     }
// }
// foo();

// call stack:
// async API: console.log(0) 5s,console.log(1) 4s, console.log(i), console.log(3), console.log(4), 1s
// message queue: console.log(4),console.log(3), console.log(i), console.log(i), console.log(i)

// const foo = () => {
//     console.log('this is foo()');
// }
// const bar = () => {
//     console.log('this is bar()');
// }
// const getRandomTime = () => {
//     return Math.floor(Math.random() * 6);
// }

// const callFnInRandomTime = (cb) => {
//     const timer = getRandomTime();
//     console.log(timer, 's');
//     setTimeout(cb, timer * 1000);
// }
// callFnInRandomTime(foo);
// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(foo);
//             });
//         });
//     });
// }); // promise

// XHR

// function getUser(cb, id) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             const data = JSON.parse(xhttp.response);
//             cb(data);
//         }
//     };
//     const url = 'https://jsonplaceholder.typicode.com/posts/'
//     xhttp.open("GET", url + id, true);
//     xhttp.send();
// }
// function getUser(id) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         const url = 'https://jsonplaceholder.typicode.com/posts/';

//         xhttp.open("GET", url + id, true);
//         xhttp.send();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 const data = JSON.parse(xhttp.response);
//                 resolve(data);
//             }
//         };
//     });
// }
// getUser(5)
//     .then(data => {
//         print(data);
//         return getUser(12);
//     })
//     .then(data => {
//         print(data);
//         return getUser(3);
//     })
//     .then(data => print(data));
// syntactic sugar
// async await

// async function getUsers() {
//     try {
//         const data5 = await getUser(5);
//         print(data5);
//     } catch (error) {
//         console.log(error);
//     }


//     const data12 = await getUser(12);
//     print(data12);
//     const data3 = await getUser(3);
//     print(data3);
// }
// getUsers();

// function print(data) {
//     console.log(data);
// }
// getUser(data => {
//     print(data);
//     getUser((data) => {
//         print(data);
//         getUser((data) => {
//             print(data);
//         }, 3)
//     }, 12)
// }, 5)  // 5, 12, 3

// Promise

// const foo = () => {
//     console.log('this is foo()');
// }
// const bar = () => {
//     console.log('this is bar()');
// }
// const getRandomTime = () => {
//     return Math.floor(Math.random() * 6);
// }

// const p = new Promise((resolve, reject) => {
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
//     setTimeout(() => {
//         resolve('hello');
//     }, timer * 1000);

// })
//     .then(data => {  // 
//         console.log('this is data: ', data);
//         return data + '2';
//     })
//     .then(data2 => console.log('this is data2: ', data2))
//     .catch(err => console.log(err));

// MyPromise
// class MyPromise {
//     promiseState = 'pendding';
//     thenCallBackQueue = [];
//     catchCallBackQueue = [];
//     currentData;
//     currentError;

//     constructor(exe) {
//         exe(this.resolve, this.reject.bind(this));
//     }
//     resolve = (data) => {
//         if (this.promiseState === 'failed') return;
//         this.promiseState = 'fulfilled';
//         setTimeout(() => {
//             this.currentData = data;

//             while (this.thenCallBackQueue.length) {
//                 const cb = this.thenCallBackQueue.shift();
//                 if (this.currentData instanceof MyPromise) {
//                     // this.promiseState = 'pendding';
//                     this.currentData.then(dataFromRes => {
//                         this.currentData = cb(dataFromRes)
//                     });
//                     this.currentData.catch(error => {
//                         this.currentError = error;
//                     });
//                 } else {
//                     this.currentData = cb(this.currentData);
//                 }
//             }
//         }, 0);
//     }
//     reject(error) {
//         if (this.promiseState === 'fulfilled') return;
//         this.promiseState = 'failed';
//         setTimeout(() => {
//             this.currentError = error;
//             if (this.catchCallBackQueue.length) {
//                 const cb = this.catchCallBackQueue.shift();
//                 cb(this.currentError);
//             }
//         }, 0);
//     }
//     then(thenCallBack) {
//         this.thenCallBackQueue.push(thenCallBack);
//         return this;
//     }
//     catch(catchCallBack) {
//         this.catchCallBackQueue.push(catchCallBack);
//     }

//     static all(array) {
//         let counter = 0;
//         const arrLength = array.length;
//         const resolveData = new Array(arrLength);

//         return new MyPromise((res, rej) => {
//             array.forEach((ele, i) => {
//                 ele.then(data => {
//                     counter++;
//                     resolveData[i] = data;
//                     if (arrLength === counter) res(resolveData);
//                 })
//             });
//         });
//     }
// }

// const p = new Promise((resolve, reject) => {
//         resolve('hello');
//         // reject(new Error('fail'));
// })
//     .then(data => {
//         console.log('this is data: ', data);
//         return new Promise((res, rej) => {
//             res('Dio');
//             rej('Jojo');
//         });
//     })
//     .then(data2 => console.log('this is data2: ', data2))
//     .catch(err => console.log(err));


// shift, unshift, pop, push

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => data.json());
// const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2').then(data => data.json());
// const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/3').then(data => data.json());

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// myFetch('https://jsonplaceholder.typicode.com/postssdsfer', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => {
//         // console.log(response);
//         if (response.status >= 400) {
//             return new Promise((res, rej) => {
//                 rej(new Error(response.status));
//             });
//         }
//         return response.json();
//     })
//     .then((json) => console.log(json))
//     .catch(err => console.error(err));

// function myFetch(url, options) {
//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();

//         xhttp.open(options.method, url, true);

//         if (options.headers) {
//             for (let key in options.headers) {
//                 xhttp.setRequestHeader(key, options.headers[key]);
//             }
//         }

//         xhttp.send(options.body);
//         xhttp.onreadystatechange = function () {
//             // console.log('onready', this.readyState, this.status);
//             if (this.readyState === 4
//                 && this.status >= 200
//                 && this.status < 300) {
//                 const response = {
//                     json: () => JSON.parse(xhttp.response)
//                 }
//                 resolve(response);
//             } else if (this.status < 200 || this.status >= 300) {
//                 reject({
//                     errorState: this.readyState,
//                     errorStatus: this.status
//                 })
//             }
//         };
//     });
// }

function foo() {
    console.log(a);
    let a = 5;
}
foo();
console.log(typeof undefined)