//use toBe for primitives like strings, numbers or booleans for everything else use toEqual

const { test, expect } = require('@jest/globals')
const main = require('./main')

describe('1. Write a JavaScript function that reverse a number', () => {
	test('reverse 12345 to be 54321', () => {
		expect(main.reverseNum(12345)).toBe(54321)
	})
})

describe('2. Write a JavaScript function that checks whether a passed string is palindrome or not?', () => {
	test('madam is palindrome true', () => {
		expect(main.checkPalindrome('madam')).toBe(true)
	})
	test('abcde is palindrome false', () => {
		expect(main.checkPalindrome('abcde')).toBe(false)
	})
})

// describe('3. Write a JavaScript function that generates all combinations of a string', () => {
// 	test('all combinations of dog are d,do,dog,o,og,g', () => {
// 		expect(main.generateCombs('dog')).toBe('d,do,dog,o,og,g')
// 	})
// })

describe('4. Write a JavaScript function that returns a passed string with letters in alphabetical order', () => {
	test('sort webmaster will equal to abeemrstw', () => {
		expect(main.sortString('webmaster')).toBe('abeemrstw')
	})
})

describe('5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case', () => {
	test("Convert 'the quick brown fox' to be 'The Quick Brown Fox' ", () => {
		expect(main.convertUpperCase('the quick brown fox')).toBe(
			'The Quick Brown Fox'
		)
	})
})

describe('6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.', () => {
	test('Longest word of Web Development Tutorial is Development', () => {
		expect(main.longestWord('Web Development Tutorial')).toBe('Development')
	})
})

describe('7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.', () => {
	test("lowercase only: Number of vowels in 'The quick brown fox' equals to 5", () => {
		expect(main.countVowel('The quick brown fox')).toBe(5)
	})
	test("including uppercase: Number of vowels in 'ThE quick brOwn fox' equals to 5", () => {
		expect(main.countVowel('The quick brown fox')).toBe(5)
	})
})

describe('8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.', () => {
	test('1 is not a prime', () => {
		expect(main.isPrime(1)).toBe(false)
	})
	test('2 is a prime', () => {
		expect(main.isPrime(2)).toBe(true)
	})
	test('5 is a prime', () => {
		expect(main.isPrime(5)).toBe(true)
	})
	test('15 is not a prime', () => {
		expect(main.isPrime(15)).toBe(false)
	})
})

describe('9. Write a JavaScript function which accepts an argument and returns the type.', () => {
	test("type of 'abc' is string", () => {
		expect(main.returnType('abc')).toBe('string')
	})
	test('type of 1 is number', () => {
		expect(main.returnType(1)).toBe('number')
	})
	test('type of 1.1 is number', () => {
		expect(main.returnType(1.1)).toBe('number')
	})
	test('type of Infinity is number', () => {
		expect(main.returnType(Infinity)).toBe('number')
	})
	test('type of NaN is number', () => {
		expect(main.returnType(NaN)).toBe('number')
	})
	test('type of undefined is undefined', () => {
		expect(main.returnType(undefined)).toBe('undefined')
	})
	test('type of true is string', () => {
		expect(main.returnType(true)).toBe('boolean')
	})
	test('type of a function is function', () => {
		const hello = () => 'hello'
		expect(main.returnType(hello)).toBe('function')
	})
	test('type of null is object', () => {
		expect(main.returnType(null)).toBe('object')
	})
	test('type of person is object', () => {
		const person = { name: 'Yoyo' }
		expect(main.returnType(person)).toBe('object')
	})
})

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
describe('11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.', () => {
	test('second lowest and second greatest numers of [1,2,3,4,5] is [2,4]', () => {
		expect(main.secondLG([1, 2, 3, 4, 5])).toEqual([2, 4])
	})
})

describe('12. Write a JavaScript function which says whether a number is perfect.', () => {
	test('', () => {
		expect().toBe()
	})
})
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// 13. Write a JavaScript function to compute the factors of a positive integer.

// 14. Write a JavaScript function to convert an amount to coins.

// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])

// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.

// Output : 25, 10, 10, 1

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// 16. Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"

// Expected Output : "thequickbrownfxjmpsvlazydg"

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

// 18. Write a function for searching JavaScript arrays with a binary search.

// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// 19. Write a JavaScript function that returns array elements larger than a number.

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

// Sample array : [1, 2, 3] and subset length is 2

// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// Sample arguments : 'microsoft.com', 'o'

// Expected output : 3

// 23. Write a JavaScript function to find the first not repeated character.

// Sample arguments : 'abacddbec'

// Expected output : 'e'

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])

// Expected output : "United States of America"

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

// 29. Write a JavaScript function to get the function name.
