generateRandomCharacters = len =>{
    let str = '';
    // Ascii(48-57) -> 0-9, Ascii(65-90) -> A-Z, Ascii(97-122) -> a-z
    for(let i=0; i<len; i++){
        let random_values = [
            Math.floor(Math.random()*(57-48)+48),
            Math.floor(Math.random()*(90-65) + 65),
            Math.floor(Math.random()*(122-97) + 97)
        ];
        str += String.fromCharCode(
            random_values[Math.floor(Math.random()*random_values.length)]
            );
    }

    return str;
};

console.log(generateRandomCharacters(55));