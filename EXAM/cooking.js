function cooking (arr) {
    let budjet = Number(arr[0]);
    let students = Number(arr[1]);
    let priceForFlour = Number(arr[2]);
    let priceForEgg = Number(arr[3]);
    let priceForApron = Number(arr[4]);

    let freeFlourIndex = 5;
    let freeFlourCount = 0;

    for (let i = 1; i <= students; i++) {
        if (i == freeFlourIndex) {
            freeFlourIndex += 5;
            freeFlourCount++;
        }
    }
    let totalFlourPrice = (students - freeFlourCount) * priceForFlour;
    let totalEggsPrice = priceForEgg * 10 * students;
    let totalApronPrice = priceForApron * Math.ceil(students + (students * 0.20));
    let totalPackagesPrice = totalFlourPrice + totalEggsPrice + totalApronPrice;

    if (budjet < totalPackagesPrice) {
        let neededMoney = totalPackagesPrice - budjet;
        console.log(`${neededMoney.toFixed(2)} more needed$.`);
    } else {
        console.log(`Items purchased for ${totalPackagesPrice.toFixed(2)}$.`);
    }
}

cooking([
    100,
    25,
    4.0,
    1.0,
    6.0
]);