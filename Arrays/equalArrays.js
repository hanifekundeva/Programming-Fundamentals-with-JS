function equalArrays(arr1, arr2) {
    let sumArr1 = 0;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sumArr1 += Number(arr1[i]);
        }
    }
    console.log(`Arrays are identical. Sum: ${sumArr1}`);
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);