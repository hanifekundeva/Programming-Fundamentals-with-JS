function computerStore (arr) {
    let priceWithoutTax = 0;
    let i = 0;

    while (arr[i] !==  'regular' && arr[i] !== 'special') {
        if (arr[i] <= 0)  {
            console.log('Invalid price!');
            i++;
            continue
        }
       priceWithoutTax += Number(arr[i]);
       i++;
    }
    let priceWithTax = 0;
    let taxes = 0;

    if (priceWithoutTax == 0) {
        console.log('Invalid order!');
        return;
    }

    taxes = 0.20 * priceWithoutTax;
    priceWithTax = (priceWithoutTax * 0.20) +  priceWithoutTax;
    
    if(arr[i] == 'special') {
        taxes = 0.20 * priceWithoutTax;
        priceWithTax *= 0.90;
    }
   
    console.log('Congratulations you\'ve just bought a new computer!');
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
}


computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    );

// computerStore(
//     ([
//         '1023', 
//         '15', 
//         '-20',
//         '-5.50',
//         '450', 
//         '20', 
//         '17.66', 
//         '19.30', 'regular'
//         ])        
//     );