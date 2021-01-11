function strCombinations(inp_str){
    let start_index = 0, loop_index = 0, end_index = inp_str.length;
    while(start_index<end_index){
        loop_index = start_index;
        let temp = loop_index;
        while(temp<end_index){
            console.log(inp_str.substring(loop_index, temp+1));
            temp++;
        }
        start_index++;
    }
}

strCombinations('bobby');