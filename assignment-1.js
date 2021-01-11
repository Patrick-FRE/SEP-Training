//JavaScript Assignment-1 //

//Answers

//2
/*

*/

//1-
/*   
function Reserve(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Reserve(32243));

*/


//2
/*
function palindrome(myString){

 //remove special characters, spaces and make lowercase*
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

// reverse removeChar for comparison
var checkPalindrome = removeChar.split('').reverse().join('');

// Check to see if myString is a Palindrome
if(removeChar === checkPalindrome){
  
  document.write("<div>"+ myString + " is a Palindrome <div>");
}else{
  
  document.write("<div>" + myString + " is not a Palindrome </div>");
}
}
palindrome('"Oh who was it I saw, oh who?"')
palindrome('"mada"')
palindrome('"Star Wars"')
palindrome('"2,3,4,3,2"')
palindrome('"7,10,7,8,9"')

*/



//3
/*
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");


*/



//4
/*
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

*/

//5
/*
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

document.write(titleCase("I'm a little tea pot"));

*/


//6
/*
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

*/


//7
/*
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

*/


//8
/*
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

*/


//9
/*
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));
*/


//10
/*
function matrix(n) {

        var i;
        var j;

        for (i=0; i < n; i++)
        {
          for (j=0; j < n; j++)
          {
               if (i === j)
               {
                
                 console.log(' 1 ');
               }
                      
               else 
                {
                 console.log(' 0 ');}
                }
             console.log('----------');
           }
       }
matrix(4);

*/


//11
/*
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

*/

//12
/*

*/

//13
/*
function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

*/

//14
/*
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));

*/

//15
/*
function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

*/

//16
/*
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

*/

//17
/*
function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

*/


//18
/*
function array_binarySearch(narray, delement) {
   var mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1) 
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      var arr = narray.slice(mposition + 1);
      var res = array_binarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      var arr1 = narray.slice(0, mposition);
      return array_binarySearch(arr1, delement);
   }
}

 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log(array_binarySearch(myArray, 6));

*/


//19
/*
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

*/


//20
/*
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

*/

//28

function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);



//29
/*
function abc() {
    console.log( arguments.callee.name );
}

abc();

*/



