function reverse(number) {
    
}

function isPalindrome(str) {
    let i = 0, j = str.length-1;
    while(i <= j) {
        if (str.charAt(i) != str.charAt(j)) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
}

function generateAllCombinations(str) {
    const arr = str.split('');
    const result = [];
    generateHelper(result, '', arr, 0);
    console.log(result);

}

function generateHelper(result, curr, arr, start) {
    if (!result.includes(curr)) result.push(curr);
    if (arr.length != 0) {
        for(let i = start; i < arr.length; i++) {
            generateHelper(result, curr.concat(arr[i]), arr, i+1);
        }
    }
}

function bubbleSort(str) {
    
}

function capitalizeFirstLetter(str) {
    const arr = str.split(' ');
    const result = arr.map(a => a.charAt(0).toUpperCase() + a.slice(1))
                    .reduce((acc, comb) => acc + ' ' + comb);
    return result;
}

function findLongestWord(str) {
    if (str.length == 0) return str;
    const arr = str.split(' ');
    arr.sort((a, b) => b.length - a.length);
    return arr[0];
}

function countVowel(str) {
    let count = 0;
    return str.split('')
        .map(a => a.toLowerCase())
        .filter(a => a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u').length;
}
console.log('start');
console.log(isPalindrome('aban'));
generateAllCombinations('dog');
console.log(capitalizeFirstLetter("the quick brown fox jumps over the lazy dog"));
console.log(findLongestWord('web development tutorial'));
console.log(countVowel("the quick brown FOX!"));
