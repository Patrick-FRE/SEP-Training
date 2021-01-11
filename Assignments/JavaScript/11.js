/*  Code to find the second lowest and second greatest numbers in the given array, assuming there are no
    negative values in the array
*/
secondLownBig = (arr, nth_high_low) =>{
    let high =0, low =0;
    while(nth_high_low-1>0){
        high = Math.max(...arr);

        low = arr[0];
        for(let i=1; i<arr.length; i++)
            if(arr[i]>0 && low > arr[i])    low = arr[i];
        
        for(let i=0; i<arr.length; i++){
            if(high == arr[i])  arr[i] = -1;
            else if(low == arr[i])  arr[i] = -1;
        }

        nth_high_low--;
    }

    high = Math.max(...arr);
    low = Math.max(...arr);
    for(let i=0; i<arr.length; i++)
        if(arr[i]>0 && low > arr[i])    low = arr[i];

    console.log('Second Highest: ', high, '\nSecond Lowest: ', low);
};

secondLownBig([123, 55, 13, 7, 23, 7, 2, 3454, 726, 34, 462, 4, 5, 6], 2);