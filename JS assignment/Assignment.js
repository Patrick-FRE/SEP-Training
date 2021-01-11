//1
function reverseNumber(number) {
  return Number(number.toString().split("").reverse().join(""));
}

console.log(reverseNumber(123456));

function reverseString(s) {
  return s.split("").reverse().join("");
}

//2, only consider direct match
function checkPalindrome(word) {
  return word == reverseString(word);
}
console.log(checkPalindrome("aba"));
console.log(checkPalindrome("a"));
console.log(checkPalindrome("bb"));
console.log(checkPalindrome("asksa"));
console.log(checkPalindrome("fdasfa"));

//3
function comGen(s) {}
console.log(comGen("dfsa"));

//4
function alphaOrder(s) {
  return s.split("").sort().join("");
}
console.log(alphaOrder("dfsa"));
console.log(alphaOrder("webmaster"));

//5
function capFirst(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

console.log(capFirst("The quick brown fox jumps over the lazy dog."));

//6
function longestS(str) {
  return str.split(" ").reduce((acc, cur) => Math.max(acc, cur.length), 0);
}

console.log(longestS("The quick browndd fox jumps over the lazy dog."));

//7
function countVowels(str) {
  return str.split("").filter((letter) => "aeiou".includes(letter)).length;
}

console.log(countVowels("The quick browndd fox jumps over the lazy dog."));

//8
function isPrime(number) {
  if (number == 1 || number == 2) return true;
  for (let x = 2; x < number; x++) {
    if (number % x == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(55));
console.log(isPrime(3));

//9
function type(arg) {
  return typeof arg;
}

console.log(type(55));
console.log(type("ss"));
console.log(type(true));
console.log(type(function () {}));

//10
function idMatrix(n) {
  let x = Array(n * n).fill(0);
  for (let i = 0; i < n * n; i = i + n + 1) {
    x[i] = 1;
  }
  return x;
}

console.log(idMatrix(3));

//11
function secMaxMin(n) {
  x = [...new Set(n)].sort((a, b) => a - b).slice(1, n.length - 1);
  return [x[0], x.pop()];
}
console.log(secMaxMin([2, 4, 3, 5, 6, 7, 8]));

//12
function perfectN(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) if (number % i === 0) temp += i;

  if (temp === number && temp !== 0) return true;
  else return false;
}

console.log(perfectN(55));
console.log(perfectN(6));

//13
function factors(number) {
  let factors = [];
  for (let x = 1; x < number; x++) {
    if (number % x == 0) {
      factors.push(x);
    }
  }
  factors.push(number);
  return factors;
}

console.log(factors(55));
console.log(factors(3));

//14
function toCoin(number, coins) {
  finalCoins = [];
  coins.forEach(function (coin) {
    while (number >= coin) {
      finalCoins.push(coin);
      number -= coin;
    }
  });
  return finalCoins;
}
console.log("P14");
console.log(toCoin(46, [25, 10, 5, 2, 1]));

//15
function exp(b, n) {
  return b ** n;
}

console.log(exp(5, 2));
console.log(exp("4", "3"));

//16
function uniq(str) {
  return (x = [...new Set(str)].join(""));
}

console.log(uniq("thequickbrownfoxjumpsoverthelazydog"));

//17
function count(arr) {
  const final = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  return final;
}

console.log(count([1,1,2,3]));


//18
