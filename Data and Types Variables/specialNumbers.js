function specialNumbers (num) {
    
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let currNumAsStr = i.toString();

        for (let j = 0; j < currNumAsStr.length; j++) {
            let singleNumAsStr = currNumAsStr[j];
            sum += Number(singleNumAsStr);  

        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);

        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);