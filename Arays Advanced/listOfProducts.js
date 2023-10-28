function listOfProducts (arr) {
    let sortedArray = arr.sort();

    for(let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);
        
    }    
}


listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);