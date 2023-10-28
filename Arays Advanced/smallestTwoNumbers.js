function smallestTwoNumbers (arr) {
    let smallestNum = Math.min(...arr);
    let indexOfSmallestNum = arr.indexOf(smallestNum);

    arr.splice(indexOfSmallestNum, 1);

    let secondSmallestNum = Math.min(...arr);

    console.log(`${smallestNum} ${secondSmallestNum} `);
}

smallestTwoNumbers([30, 15, 50, 5]);