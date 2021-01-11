// ============= foreach() ================
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

// ============== map() ================
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let newMappedItem = cb(this[i], i, this);
    newArr.push(newMappedItem);
  }
  return newArr;
};

// ============== find() ================
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
Array.prototype.myFind = function (callback) {
  let result;
  for (let i = 0; i < this.length; i++) {
    let isFound = callback(this[i], i, this);
    if (isFound) {
      result = this[i];
      break; //stop the loop if find that item
    }
  }
  return result;
};

// ============== reduce() ================
// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
Array.prototype.myReduce = function (callback, initialValue) {
  if (initialValue === undefined) initialValue = 0;
  for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.myReduce((item, initialValue) => item + initialValue, 10));
// console.log(array1.myReduce((item, initialValue) => item + initialValue));

// ============== fileter() ================
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
// let array1 = [1, 2, 3, 4, 5];
// console.log(array1.myFilter((item) => item > 3));

// ============== some() ================
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.mySome(even));
// console.log(array.some(even));

// ============== every() ================
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};

// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.myEvery(even));
// console.log(array.every(even));
