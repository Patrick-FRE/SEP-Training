function binary_search(target,arr){
    function search(a){
        const pivot = a[Math.floor(a.length/2)];
        if(target === pivot){
            return true;
        }else if(target!==pivot  && a.length==1){
            return false;
        }else{
            return target>pivot?search(a.slice(Math.floor(a.length/2)+1)):search(a.slice(0,Math.floor(a.length/2)));
        }
    }
    return search(arr);
}

console.log(binary_search(6,[1,2,3,4,5,8]))