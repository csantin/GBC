const delayedPromise = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 500)
    })
}

const delayedPromise2 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num)
        }, 500)
    })
}

Promise.all([delayedPromise(6), delayedPromise2(7)]).then(function(values){
    console.log(values);
});

// var promises = [delayedPromise(6), delayedPromise2(7)]