//1
function reverseNum(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

//2
function palindrome(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

//3
function combina2ons(s) {
  let arr = new Array();
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  return arr;
}

//4
function alphabetOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}

//5
function UpperCaseFirstChar(str) {
  let arr = str.split(" ");
  for (ele of arr) {
    ele[0].toUpperCase();
  }
  return arr.join(" ");
}

//6
function longestSubStr(str) {
  let arr = str.split(" ");
  let longestString,
    longestLength = 0;

  for (ele of arr) {
    if (ele.length > longestLength) {
      longestString = ele;
      longestLength = ele.length;
    }
  }

  return longestString;
}

//7
function vowelCount(str) {
  let vowels = "aeiouAEIOU";
  let vcount = 0;
  for (let x = 0; x < str.length; x++) {
    if (vowels.indexOf(str[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}

//8
function Prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

//9
function findDatatype(val) {
  let datatypes = [Function, RegExp, Number, String, Boolean, Object];

  if (typeof val === "object" || typeof val === "function") {
    for (let i = 0; i < datatypes.length; i++) {
      if (value instanceof datatypes[i]) {
        return datatypes[i];
      }
    }
  }

  return typeof value;
}

//10
function identityMatrix(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (j === k) {
        arr[j][k] = 1;
      } else {
        arr[j][k] = 0;
      }
    }
  }

  return arr;
}

//11
function SecondLowestGreatest(arr) {
  let set = new Set();
  arr.forEach(ele => {
    if (!set.has(ele)) {
      set.add(ele);
    }
  });

  let result = [...set].sort();
  let str = result[1].toString() + "," + result[result.length - 2].toString();
  return str;
}

//12
function perfectNum(num) {
  let temp = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }

  if (temp === num && temp !== 0) {
    return "It is a perfect number.";
  } else {
    return "It is not a perfect number.";
  }
}

//13
function calcFactors(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }

  return result;
}

//14
function convertCoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      let left = amount - coins[0];
      return [coins[0]].concat(convertCoins(left, coins));
    } else {
      coins.shift();
      return convertCoins(amount, coins);
    }
  }
}

//15
function exp(b, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}

//16
function uniqueString(str) {
  let uniqueChar = "";
  for (let i = 0; i < str.length; i++) {
    if (uniqueChar.indexOf(str.charAt(i)) == -1) {
      uniqueChar += str[i];
    }
  }
  return uniql;
}

//17
function letterCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result.hasOwnProperty(str[i])) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }

  return result;
}

//18
function binarySearch(arr) {
  if (arr.length === 0) return -1;
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] > target) {
    return binarySearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    const subArray = binarySearch(arr.slice(mid + 1), target);
    if (subArray === -1) {
      return -1;
    } else {
      return subArray + mid + 1;
    }
  } else {
    return mid;
  }
}

//19
function largerNumber(arr, num) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] < num) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }

  return arr;
}

//20
function stringIdGene(idLength) {
  let Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < idLength; i++) {
    result += Char.charAt(Math.floor(Math.random() * Char.length));
  }
  return result;
}

//21
function fixedSubset(arr, size) {
  let all = arr.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );

  return arr.filter(ele=> ele.length == size)
}

//22
function charCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  }

  return count;
}

//23
function firstNoRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return null;
}

//24
function BubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}

//25
function longestCountryName(arr) {
  return arr.reduce((longest, country) =>
    longest.length > country.length ? longest : country
  );
}

//26
function longestSubStrNoRepeat() {
  let max = 0,
    current_string = "",
    i,
    char,
    pos;

  for (i = 0; i < string.length; i += 1) {
    char = string.charAt(i);
    pos = current_string.indexOf(char);
    if (pos !== -1) {
      // cut "dv" to "v" when you see another "d"
      current_string = current_string.substr(pos + 1);
    }
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
}

//27
function is_Palindrome(str) {
  let = str
    .split("")
    .reverse()
    .join("");
  return str == rev;
}
function longestPalindrome(str) {
  let maxLength = 0;
  let longPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    let subs = str.substr(i, str.length);

    for (let j = subs.length; j >= 0; j--) {
      let subString = subs.substr(0, j);
      if (subString.length <= 1) continue;

      if (is_Palindrome(subString)) {
        if (subString.length > maxLength) {
          maxLength = subString.length;
          longPalindrome = subString;
        }
      }
    }
  }

  return longPalindrome;
}

//28
function newFunc() {
  return "js function";
}
function passJSfunc(newFunc) {
  return newFunc();
}

//29
function getFuncName() {
  let myName = arguments.callee.toString();
  return myName;
}
