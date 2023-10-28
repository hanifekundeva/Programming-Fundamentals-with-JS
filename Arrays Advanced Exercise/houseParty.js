function hauseParty (arr) {
    let guests = [];

    for (let command of arr) {
        let name = command.split(" ")[0];
        let command1 = command.split(" ");
        if (command1.includes('not')) {
            if (guests.includes(name)) {
                let indexOfGestToBeRemoved = guests.indexOf(name);
                guests.splice(indexOfGestToBeRemoved, 1); 

            } else {
                console.log(`${name} is not in the list!`);
            }
            
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);

            } else {
                guests.push(name);
            }
        }
    }
    console.log(guests.join("\n"));
}


hauseParty([
'Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);