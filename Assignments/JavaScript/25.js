largestCountryName = country_name =>{
    let size = 0, index = 0;

    size = country_name[0].length;
    for(let i=1; i<country_name.length; i++){
        if(size<country_name[i].length){
            size = country_name[i].length;
            index = i;
        }
    }

    return country_name[index];
};

console.log(largestCountryName([
    "Norway", 
    "Russia", 
    "Asia", 
    "United Kingdom"
]));