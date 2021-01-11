function alphabeticalOrder(inp_str){
    return inp_str.split('').sort().join('');
}

console.log(alphabeticalOrder('webmaster'));