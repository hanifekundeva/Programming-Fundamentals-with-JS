function angryCat(priceRatings, entryPoint, typeOfItems) {

    let entryPointElement = priceRatings[entryPoint];

    let leftSum = 0;

    for (let i = 0; i < entryPoint; i++) {
        if (typeOfItems === "cheap") {
            if(priceRatings[i] < entryPointElement) {
                leftSum += priceRatings[i];
            }
        } else {
            if(priceRatings[i] >= entryPointElement) {
                leftSum += priceRatings[i];
            }
        }
    }

    let rightSum = 0;
    for (let i = priceRatings.length - 1; i > entryPoint; i--) {
        if(typeOfItems === "cheap") {
            if(priceRatings[i] < entryPointElement) {
                rightSum += priceRatings[i];
            }
        } else {
            if(priceRatings[i] >= entryPointElement) {
                rightSum += priceRatings[i];
            }
        }
    }

    if(rightSum > leftSum) {
        console.log(`Right - ${rightSum}`);
    } else {
        console.log(`Left - ${leftSum}`);
    }
}

angryCat(
    [1, 5, 1],

    1,
    
    "cheap");