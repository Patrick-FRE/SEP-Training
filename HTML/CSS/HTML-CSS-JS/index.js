// HTML
// HTML5:Web Component | Semantic HTML - Accessibility - 508 section - screen reader - aria attr
//       meta tag
//       SVG vs Canavs | SVG icon vs Font icon
//       DOM
// CSS:
// css reset vs css normalize
// Layout: flexbox | ccs-grid | float(clearfix)
//         center an item
//         responsive design | moblie first design
//         z-index | postion |
// JS:
// callback function  | callback hell | Promise | async await | Event loop
// function foo(str, callback) {
//   console.log(str, callback());
// }
// function sayHello() {
//   return 'Hello Patrick';
// }

// foo('Say hello', sayHello());

// function afterOneSec(callbackFn) {
//   setTimeout(() => {
//     callbackFn();
//   }, 2000);
// }

// afterOneSec(() => {
//   console.log('get first data');
//   afterOneSec(() => {
//     console.log('get second data bassed on the first data Id');
//     afterOneSec(() => {
//       console.log('get third data bassed on the second data Id');
//     });
//   });
// });
//  ES 6:
//  class
//  var vs let vs const
//  arrow function
//  IIFE | closure | modular pattern
// (function test() {
//   console.log('hello');
// })();
// const Controller = (function () {
//   /// ==== closure  A====
//   function init() {
//     console.log('init');
//   }
//   /// ==== closure A ====
//   return {
//     init,
//   };
// })();

// function init(){
//     console.log('init');
// }

//  this key
// function foo(args, sec) {
//   console.log(this);
//   console.log(args, sec);
// }
// foo(); // invoke
// foo.call({ name: 'patrick' }, [1, 2]);
// foo.apply({ name: 'patrick' }, [1, 2]);

// const obj = {
//   method: foo,
// };
// console.log(obj);
// obj.method(); // output
