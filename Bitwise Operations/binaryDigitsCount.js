function binaryDigits (number, digit) {
    let count = 0;

    while (number > 0) {
        let remeinder = number % 2;
        number = Math.floor(number / 2);

        if (remeinder === digit) {
            count++;
        }
    }
    console.log(count);
}

binaryDigits(
    10,
    0
    );