class MyPromise {
    thenCallBackQueue = [];
    catchCallBack = () => {};
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
}

const getRandomTime = () => {
    return Math.floor(Math.random() * 10);
}

const p = new MyPromise((resolve, reject) => {
    resolve('hello');
    reject('reject');
})
    .then(data => {
        console.log('Data: ', data);
        const newProm= new MyPromise((res, rej) => {
            if(getRandomTime() >5)
                res('Aravind');
            else
                rej('Time out rejection');
        });
        newProm.then(new_data => console.log('New Data: ', new_data))
        .catch(err => console.log(err));
    })