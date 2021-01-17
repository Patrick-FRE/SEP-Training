/* 18. Write a function for searching JavaScript arrays with a binary search.
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

binarysearch


Input:
Output: 4 */
// nums = [-1, 0, 3, 5, 9, 12]
// target = 9

// function binary(nums, target) {

//     let L = 0
//     let R = nums.length

//     while(L < R){
//         let mid = Math.floor((L + R)/2) 
//         if(nums[mid] == target){
//             return mid;
//         }
//         else if( nums[mid] < target ){
//             L = mid + 1
//         }
//         else if( nums[mid] > target ){
//             R = mid
//         }

//     }
//     return L;
// }

// console.log(binary(nums, target))

/* 24. Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 */


// var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 455, 23, 234, 213]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j+1]
//             arr[j+1] = arr[j]
//             arr[j] = temp;
//         }

//     }
// }

// console.log(arr)



/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.  */
// var str = 'google.com'
// gle.com


// function sort(names) {
//     string = "";
//     ss = "";
//     namestring = names.split("");

//     for (j = 0; j < namestring.length; j++) {
//         for (i = j; i < namestring.length; i++) {
//             if (string.includes(namestring[i]))
//                 break;
//             else
//                 string += namestring[i];
//         }
//         if (ss.length < string.length)
//             ss = string;
//             console.log('string: ' + string + ' @ ' + j)
//             string = "";

//     }
//     return ss;
// }
// console.log(sort("google.com"));


/* 14. Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output : 25, 10, 10, 1
 */


// var coinChange = function(coins, amount) {
    
//     dp = new Array(amount+1).fill(amount+1)
    
//     // base case
//     dp[0]=0
//     for(let i=0;i<dp.length;i++){
//         //each coin stack
//         for(x of coins){
//         if(i -x < 0){ continue }
//             dp[i]= Math.min(dp[i],1+ dp[i - x])
//         }
//     }
//     // dp[amount]
//     console.log(dp)
//     return dp[amount] !== amount +1? dp[amount] : -1    
// };



