const multiplyNumbers = (mixArr) => {
    return new Promise((resolve, reject) => {
        let newArr = []
        if (Array.isArray(mixArr)){
            for (let value in mixArr){
                if(typeof(mixArr[value]) === 'number'){
                    newArr.push(value * 5)
                }
            }
        }
        else{
            reject("Error: Invalid Array");
        }
        return resolve(newArr);
    });
}

const mixedArray = ['Matrix', 1, true, 2, false, 3]

multiplyNumbers(mixedArray)
    .then((result) => console.log(result))
    .catch(error => console.log(error))