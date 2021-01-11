callingFunc = (callback) =>{
    console.log('calling another function');
    callback();
};

function callbackFunc(){
    console.log('This function is called inside a function');
}

callingFunc(callbackFunc);