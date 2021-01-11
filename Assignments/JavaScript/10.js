identityMatrix = n =>{
    let matrix = new Array(n);

    for(let i=0; i<n; i++){
        matrix[i] = new Array(n);
        matrix[i][i] = 1;
    }
    for(let i=0; i<n; i++)
        for(let j=0; j<n; j++)
            if (i !== j)    matrix[i][j] = 0;

    return matrix;
};

console.log(identityMatrix(5));