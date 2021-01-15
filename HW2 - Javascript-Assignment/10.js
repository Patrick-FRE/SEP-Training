function idMatrix(n){
    const result = [];
    for(let i=0;i<n;i++){
        result.push([]);
        for(let j=0;j<n;j++){
            result[i].push(i===j?1:0);
        }
    }
    return result;
}

console.log(idMatrix(5))