function longestName(arr){
    const lens = arr.map(x=>x.length);
    return arr[lens.indexOf(Math.max(...lens))]
}

console.log(longestName(["Australia", "Germany", "United States of America"]))