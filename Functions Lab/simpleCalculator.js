let simpleCalc = (firstNum, secondNum, operator) => {
    let result;

    switch (operator) {
        case 'multiply':
            result = firstNum * secondNum;
            break;
        case 'divide':4
            result = firstNum / secondNum;
            break;
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'subtract':
            result = firstNum - secondNum;
            break;
    }
    console.log(result);
}

simpleCalc(
    5,
    5,
    'multiply'
);

