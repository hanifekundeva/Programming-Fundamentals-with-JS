function amazinNumbers (num) {
    let sum = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let sumAsString = String(sum);
    let isAmazing = 'False';
    

    for (let i = 0; i < sumAsString.length; i++ ) {
        if (sumAsString[i] == '9') {
            isAmazing = 'True';
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`);

}

amazinNumbers(1233);