function sumOfOddNumbers(n) {
    let sumOfOddNumbers = 0;
    let i = 1;
    let oddNumbersCount = 0;

    while (oddNumbersCount < n ) {
        if (i % 2 !== 0) {
            sumOfOddNumbers += i;
            console.log(i);
            oddNumbersCount++;
        }

        i++;
    }
    console.log(`Sum: ${sumOfOddNumbers}`);
}

sumOfOddNumbers(5);