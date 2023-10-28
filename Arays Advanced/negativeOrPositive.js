function negativeOrPositive (arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = Number(arr[i]);
        if (currNum < 0) {
            newArr.unshift(currNum);
        } else {
            newArr.push(currNum);
        }

    }
    console.log(newArr.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);