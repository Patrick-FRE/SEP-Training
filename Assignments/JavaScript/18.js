binarySearch = (arr, ele, left, right) =>{
    if(left>right)  return false;
    let mid = Math.floor((left+right)/2);
    if(arr[mid] == ele) return true;
    else if(arr[mid] > ele) return binarySearch(arr, ele, left, mid-1);
    else    return binarySearch(arr, ele, mid+1, right);
};

let arr = [34, 13, 65, 2, 4,6 , 1];
arr.sort((a, b) => a-b);

console.log(binarySearch(arr, 34, 0, arr.length-1));