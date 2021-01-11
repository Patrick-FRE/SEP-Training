// 1
const reverseNum = (num) => {
  // Solution 1
  //   console.log(
  //     parseInt(num.toString().split("").reverse().join("")) * Math.sign(num)
  //   );
  //   return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);

  //   Solution 2
  let res = 0;
  const sign = Math.sign(num);
  num = Math.abs(num);

  while (num !== 0) {
    res = res * 10 + Math.floor(num % 10);
    num = Math.floor(num / 10);
  }

  res *= sign;

  console.log(res);
  return res;
};

reverseNum(-32243);

// 2
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l <= r) {
    if (s[l] !== s[r]) {
      console.log(false);
      return false;
    }

    l++;
    r--;
  }

  console.log(true);
  return true;
};

isPalindrome("word");
isPalindrome("wow");

// 3
const allCombo = (s) => {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let subString = s.substring(i, j);
      res.push(subString);
    }
  }

  console.log(res);
  return res;
};

allCombo("dog");

// 4
const orderString = (s) => {
  let res = s.split("").sort().join("");

  console.log(res);
  return res;
};

orderString("webmaster");

// 5
const firstLetterUpper = (s) => {
  let res = s
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  console.log(res);
  return res;
};

firstLetterUpper("the quick brown fox");

// 6
const longestWord = (s) => {
  let arr = s.split(" ");

  let max = arr[0].length;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const len = arr[i].length;
    if (len > max) {
      max = len;
      res = arr[i];
    }
  }

  console.log(res);
  return res;
};

longestWord("Web Development Tutorial");

// 7
const countVowels = (s) => {
  let count = 0;
  for (const char of s) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  console.log(count);
  return count;
};

countVowels("The quick brown fox");

// 8
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(false);
      return false;
    }
  }

  console.log(num > 1);
  return num > 1;
};

isPrime(5);
isPrime(8);

// 9
const checkType = (params) => {
  console.log(typeof params);
  return typeof params;
};

checkType(5);
checkType("5");
checkType(false);
checkType({ a: 3 });
checkType(() => {});

// 10

// 11
const findTwoNumbers = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  console.log(nums[1], nums[len - 2]);
  return nums[1], nums[len - 2];
};

findTwoNumbers([1, 4, 3, 2, 5]);
