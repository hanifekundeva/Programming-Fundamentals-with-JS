function vacation (count, type, day) {
    let singularPrice = 0;

    switch (day) {
        case'Friday':
        if (type === 'Students') {
            singularPrice = 8.45;
        }
        if (type === 'Business') {
            singularPrice = 10.90;
        }
        if (type === 'Regular') {
            singularPrice = 15;
        }
        break;

        case 'Saturday':
            if (type === 'Students') {
                singularPrice = 9.80;
            }
            if (type === 'Business') {
                singularPrice = 15.60;
            }
            if (type === 'Regular') {
                singularPrice = 20;
            }
             break;
        case 'Sunday':
            if (type === 'Students') {
                singularPrice = 10.46;
            }
            if (type === 'Business') {
                singularPrice = 16;
            }
            if (type === 'Regular') {
                singularPrice = 22.50;
            }
            break;
    }
    let totalPrice = count * singularPrice;
    if (type == 'Students' && count >= 30) {
        totalPrice *= 0.85;
    } else if (type == 'Business' && count >= 100) {
        totalPrice = totalPrice - (singularPrice * 10);
    } else if (type == 'Regular' && (count >= 10 && count <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(
    40,
    "Regular",
    "Saturday"
    );