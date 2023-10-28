function arrayManipulations (arr) {
    let numbersAsStrArray = arr[0].split(" ");
    let numbersArray = numbersAsStrArray.map(Number);
    arr.shift();

    for (let element of arr) {
        let command = element.split(" ")[0];
        let number = Number(element.split(" ")[1]);

        switch (command) {
            case 'Add':
                numbersArray.push(number);
                break;
            case 'Remove':
                numbersArray = numbersArray.filter(element => element !== number)
                break;
            case 'RemoveAt':
                numbersArray.splice(number, 1);
                break;
            case 'Insert':
                let index = Number(element.split(" ")[2]);
                numbersArray.splice(index, 0, number)
                break; 
        }       
    }
console.log(numbersArray.join(" "));
}

arrayManipulations([
'4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);


