// My forEach | myFilter | myMaap | myReduce. | typeof

// Array.prototype.__proto__.myforEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         // cb(this[i])
//         console.log(this);
//     }
// }

// array1.myforEach(ele => console.log(ele))
let array1 = ([1, 2, 3])


// Array.prototype.myFilter = function (cb) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i])) { res.push(this[i]) }
//     }
//     return res;
// }
// console.log(array1.myFilter(ele => ele > 1));


// Array.prototype.myMap = function (cb) {
//     res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i], i, []))
//     }
//     return res;
// }

// console.log(array1.myMap(ele => ele * 2));


// Array.prototype.myReduce = function (cb) {
//     let acc = 0;
//     for (let i = 0; i < this.length; i++) {
//         console.log(i, cb(acc, this[i]));
//         acc = (cb(acc, this[i]))

//     }
//     // return acc;
// }


// console.log(array1.myReduce((acc, cur) => {
//     return acc + cur
// }));




// myFetch

//470 closure
// function limitedFunction(num, cb) {
//     let counter = 0;
//     return function (...args) {
//         if (num === counter) { console.log('over'); }
//         else {
//             cb(...args)
//             counter++;
//         }
//     }



// }




// const fn = limitedFunction(3, (a, b) => console.log(a + b));
// fn(2, 3);