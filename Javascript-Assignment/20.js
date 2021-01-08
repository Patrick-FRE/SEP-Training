function generateID(alphabet,len){
    let result = "";
    for(let i=0;i<len;i++){
        result+=alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
}

console.log(generateID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",10))