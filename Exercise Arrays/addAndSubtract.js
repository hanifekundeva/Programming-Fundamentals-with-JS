function addAndSubtract(arr) {
    let oldArrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        oldArrSum += num;

        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newArrSum += num;
        arr[i] = num;
    }
    console.log(arr);
    console.log(oldArrSum);
    console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35]);