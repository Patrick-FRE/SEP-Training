function countVowels(inp_str){
    let no_of_vowels = 0, vowels = ['a', 'e', 'i', 'o', 'u'];
    let len_of_str = inp_str.length, i = 0;
    inp_str = inp_str.toLowerCase();
    while(i< len_of_str){
        if(vowels.indexOf(inp_str.charAt(i)) > -1) no_of_vowels++;
        i++;
    }

    return no_of_vowels;
}

console.log(countVowels('The quick brown fox'));