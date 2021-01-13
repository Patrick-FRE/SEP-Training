// MyPromise
class MyPromise {
    thenCallBackQueue = [];
    catchCallBack = () => { };
    currentData;

    constructor(exe) {
        exe(this.resolve, this.reject);
    }
    resolve = (data) => {
        setTimeout(() => {
            this.currentData = data;
            while (this.thenCallBackQueue.length) {
                const cb = this.thenCallBackQueue.shift();
                if (this.currentData instanceof MyPromise) {
                    this.currentData.then(dataFromRes => {
                        this.currentData = cb(dataFromRes)
                    })
                } else {
                    this.currentData = cb(this.currentData);
                }

            }
        });
    }
    reject = (err) => {
        setTimeout(() => {
            this.currentData = err;
            this.catchCallBack(err);
        }, 0)
    }
    then(thenCallBack) {
        this.thenCallBackQueue.push(thenCallBack);
        return this;
    }
    catch(catchCallBack) {
        this.catchCallBack = catchCallBack;
        return this;
    }
    // all() {}
}

const getRandomTime = () => {
    return Math.floor(Math.random() * 10);
}

const p = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    // const time = getRandomTime();
    // if (time < 3) {
    //     setTimeout(() => resolve('hello'), time);
    // } else {
    //     reject('OUT OF CONNECTION!');
    // }
    resolve('hello');
    // }, 0)
})
    .then(data => {  // 
        console.log('this is data: ', data);
        return new MyPromise((res, rej) => {
            const time2 = getRandomTime();
            if(time2 >3){
            res('Jojo');
            } else{
                rej('OUT OF CONNECNTION! (2nd)');
            } //Why is the second rej never handled?
        });
    })
    .then(data2 => console.log('this is data2: ', data2))
    .catch(err => console.log(err));

// shift, unshift, pop, push


// fetch

// myfetch()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
