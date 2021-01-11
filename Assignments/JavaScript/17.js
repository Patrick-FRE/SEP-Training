/*  JavaScript function to  get the number of occurrences of each letter in specified string
 */
numOfOccurrences = str => {
    let map = new Map();
    for(let i=0; i<str.length; i++){
        if(!map.has(str.charAt(i)))
            map.set(str.charAt(i), 1);
        else
            map.set(str.charAt(i), map.get(str.charAt(i))+1);
    }

    return map;
};

console.log(numOfOccurrences('aaafffssbddbttccc'));