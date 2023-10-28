function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let secondTimeShieldBr = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            totalExpenses += shieldPrice;
            secondTimeShieldBr++;
            if (secondTimeShieldBr % 2 == 0) {
                totalExpenses += armorPrice;
            }
        }
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }

        if (i % 3 == 0) {
            totalExpenses += swordPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiator(
    7,
    2,
    3,
    4,
    5
);


