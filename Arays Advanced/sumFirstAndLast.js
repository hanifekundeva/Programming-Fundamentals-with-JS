function sum (arr) {
    let firstElement = arr.shift();
    let lasElement = arr.pop();

    console.log(Number(firstElement) + Number(lasElement));
}
sum(['20', '30', '40']);