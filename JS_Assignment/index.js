//1
function reverseNum(number) {
    var str = number + '';
    var ans = parseInt(str.split('').reverse().join(''));
    console.log(ans);
}

//2
function palindrome(str) {
    if(str.split('').reverse().join('') === str){
        return true
    }
    return false
}

// reverseNum(123);
// let ans = palindrome('assdssa');
// console.log(ans);


//3
function combination(str) {
    let res = [];
    for(let i=0; i < str.length; i++){
        let j = i+1;
        while(j <= str.length){
            res.push(str.slice(i, j));
            j++;
        }
 }
 console.log(res);
 return res;
}

//combination("doggle");

//4
function alphOrder(str) {
    if (!str){
        return '';
    }
    var map = Array.prototype.map
    var a = map.call(str, function(x) {
        return x.charCodeAt(0);
})
    a.sort((a, b) => a-b);
    //console.log(a);
    var res = a.map((num) => String.fromCharCode(num))
    console.log(res.join(''));
    return res;
}

//alphOrder('zgadgf')

//5
function first2Upper(str) {
    let arr = str.split(' ');
    arr.forEach((element, index) => {
        console.log(element);
        arr[index] = element.charAt(0).toUpperCase() + element.slice(1); 
    }, arr);
    arr.join('');
    console.log(arr);
    return arr;
}

//first2Upper('the quick brown fox');

//6
function longestWord(str) {
    if(!str){
        return '';
    }
    let arr = str.split(' ');
    let acc = 0;
    let id = 0
    arr.forEach((ele, index) => {
        if(ele.length > acc){
            acc = ele.length;
            id = index;
        }
    })
    console.log(arr[id]);
    return arr[id];
}

//longestWord('Web Development Tutorialaasd');

//7.
function countVowel(str) {
    let res = 0;
    let vowel = ['a','e','i','o','u'];
    let arr = str.toLowerCase().split('');
    console.log(arr);
    arr.forEach(char => {
        //console.log(char);
        if (vowel.indexOf(char) >= 0){
            //console.log('in if -----');
            res++;
        }
    })
    console.log(res);
    return res;
}

//countVowel('The quick brown fox');


//8
function primeNum(num) {
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            return false
        }     
    }
    return true
}

// let ans = primeNum(17);
// console.log(ans);


//9
function type(para) {
    return(typeof(para));
}

// let ans1 = type(123);
// let ans2 = type('12asa3');
// let ans3 = type([1,2,3]);
// let ans4 = type({name: 'asd'});
// let ans5 = type('');

// console.log(ans1,ans2,ans3,ans4, ans5);

//10
function iMatrix(n) {
    if(n ===1){
        return [1];
    }
    let arr = []
    for(let i=0; i < n; i ++){
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[i].push(i === j? 1: 0);
        }
    }
    console.log(arr);
    return arr;
}

// iMatrix(1)

//11
function secLowAndHigh(arr) {
    let temp = new Set(arr);
    let res = [...temp];
    // console.log(temp);
    //console.log(res);
    let secLow = res[1];
    let secHigh = res.slice(-2, -1)[0];
    //console.log(secLow, secHigh);
    return [secLow, secHigh];
}

// let res = secLowAndHigh([1,1,1,2,3,4,4,5,6,6]);
// console.log(res);

//12
function perfectNum(num) {
    if(!num) {
        return false;
    }
    let acc = 1;
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            acc += i
        }
    }
    if(acc === num){
        return true;
    }

    return false;
}

// let res = perfectNum(67);
// console.log(res);


//13
function factor(num) {
    if (!num) {
        return 0;
    }
    let factors = [1];
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            factors.push(i);
            factors.push(i*-1);
        }
    }
    console.log(factors)
    return factors
    
}

//factor(24);


//14
function coins(num, arr) {
    
}


//15
function exponent(base, exp) {
    let res = 1;
    while(exp > 0){
        res *= base;
        exp --;
    }

    console.log(res);
    return res;
}

//exponent(3, 3);


//16
function extractUnique(str) {
    let arr = str.split('');
    let set = new Set(arr);
    console.log([...set].join(''));
    return [...set].join('');
}
//extractUnique('hequickbrownfoxjumpsoverthelazydog');


//17
function countOccur(str) {
    let dic = {};
    for(c of str){
        if(!dic[c]){
            dic[c] = 1;
        }else{
            dic[c] += 1;
        }
    }

    console.log(dic);
    return dic;
}

//countOccur('asdfwas');


//18
function binary(str, wanted) {
    
}


//19
function filterArr(arr, num) {
    return arr.filter((ele) => {
        return ele>num;
    })
}

// let res = filterArr([1,2,3,4,5,56,23,2,7,8], 6)
// console.log(res);


//20
function generateID(len) {
    let sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let ranStrId = '';
    for (let i = 0; i < len; i++) {
        ranStrId += sample.charAt(Math.floor(Math.random() * sample.length));
        
    }
    
    console.log(ranStrId);
}

//generateID(13);


//21
function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
    for(var x = 0; x < Math.pow(2, arra.length); x++)
    {
        result = [];
        i = arra.length - 1; 
        do{
            if( (x & (1 << i)) !== 0){
                    result.push(arra[i]);
                }
        }while(i--);

        if( result.length >= arra_size)
        {
            result_set.push(result);
            }
        }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));

//22


//23
function firstNotRepeat(str){
    let ans = '';
    let temp = {};
    for (const char of str) {
        if(!temp[char]){
            temp[char] = 1;
        }
        else{
            temp[char] += 1;
        }
    }
    for (const key in temp) {
        if(temp[key] === 1){
            ans = key;
            break;
        }
    }
    console.log(ans);
    return ans;
}

// firstNotRepeat('abcbs');

//24
function bubbleSort(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if(arr[j-1] > arr[j]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

//bubbleSort([1,3,2,4,2,6,78,3,4,9,10]);

// 25
function countryNames(arr) {
    let ans = ''
    let len = 0;
    for (const name of arr) {
        if(name.length > len){
            len = name.length;
            ans = name;
        }
    }
    console.log(ans);
    return ans;
}
//countryNames(["Australia", "Germany", "United States of America"]);

// 26
function longestSubStr(s) {
    if(!s || !s.length) {
        return 0;
    }
    let [i, j] = [0, 0];
    const map = new Set();
    let max = 0;
    while(j < s.length) {
        if(map.has(s[j])) {
            map.delete(s[i]);
            i++;
        } else {
            map.add(s[j]);
            j++;
        }
        max = Math.max(j-i, max);
    }
    console.log(max);
    return max;
};

//longestSubStr('abba');

// 27

// 28
//My filter
const arr = [1,2,3,4,5]
Array.prototype.myFilter = function(callback){
    var filtered = [];
    for (let i=0; i< this.length; i++){
        if(callback(this[i], i, this)){
            filtered.push(this[i]);
        }
    }
    return filtered;
}

var res1 = arr.myFilter((ele, index, arr) => {
    return ele>4;
});

//console.log(res);

//29
function findName() {
    console.log(arguments.callee.name);
}

//findName();