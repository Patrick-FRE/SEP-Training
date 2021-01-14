// MyPromise
class MyPromise {
  thenCallBackQueue = [];
  currentData;
  currentError;

  constructor(exe) {
    exe(this.resolve, this.reject.bind(this));
  }
  resolve = data => {
    setTimeout(() => {
      this.currentData = data;
      while (this.thenCallBackQueue.length) {
        const cb = this.thenCallBackQueue.shift();
        if (this.currentData instanceof MyPromise) {
          this.currentData.then(dataFromRes => {
            this.currentData = cb(dataFromRes);
          });
        } else {
          this.currentData = cb(this.currentData);
        }
      }
    });
  };
  // reject(error) {
  // }
  then(thenCallBack) {
    this.thenCallBackQueue.push(thenCallBack);
    return this;
  }
  catch(catchCallBack) {
    return this.then(catchCallBack);
  }
  all(promiseList) {
    return MyPromise((resolve, reject) => {
      let index = 0,
        results = [];
      for (let i = 0; i < promiseList.length; i++) {
        let item = promiseList[i];

        if (!(item instanceof MyPromise)) return;

        item
          .then(result => {
            index++;
            results[i] = result;
            if (index === promiseList.length) {
              resolve(results);
            }
          })
          .catch(reason => {
            reject(reason);
          });
      }
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  // setTimeout(() => resolve('hello'), 0);
  resolve("hello");
})
  .then(data => {
    //
    console.log("this is data: ", data);
    return new MyPromise((res, rej) => {
      // setTimeout(() => {
      res("Dio");
      // }, 0);
    });
  })
  .then(data2 => console.log("this is data2: ", data2));
// .catch(err => console.log(err));
