function processOddNumbers (arr) {
    let newArr = [];
    

    for (let i = 0; i < arr.length; i++) {
        let curElement = arr[i];
        if (i % 2 !== 0) {
            newArr.push(curElement * 2);
        }
    }
console.log(newArr.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
