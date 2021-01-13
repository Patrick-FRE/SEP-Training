class MyPromise {

    thenCallBackQueue = [];
    thenRejectCallBackQueue=[];  
    currentData;
    constructor(exe) {
        exe(this.resolve, this.reject.bind(this));
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
    reject = reason => {
        setTimeout(()=>{
            this.currentData = reason;
            this.onRejectedCallback.forEach(item => {
                item(reason);    // each one
            })
        })
     }
    then(thenCallBack) {
        this.thenCallBackQueue.push(thenCallBack);
        return this;
    }
    catch(catchCallBack) { 
        return this.reject(null, catchCallBack)

    }
    all =  promises => {                                            // arr of promises
        return new Promise((resolve, reject) => {
            let values = new Array(promises.length);
            let finishCount = 0;        // count how many promises were revosled
            for (let i = 0; i < promises.length; ++i) {
                let promise = promises[i];
                promise.then(val => {
                    values[i] = val;
                    ++finishCount;
                    if (finishCount === promises.length) {
                      resolve(values);
                    }
                }).catch(err => {
                  reject(err)
                })
            }
        });
    };
}