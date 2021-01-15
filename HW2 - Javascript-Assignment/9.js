function type(arg){
    return typeof arg;
}

console.log(type(1))
console.log(type("a"))
console.log(type(()=>{return 1}))
console.log(type(false))
console.log(type({}))
console.log(type(undefined))