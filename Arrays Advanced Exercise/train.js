function train (arr) {
    let wagons = arr[0].split(" ").map(Number);
    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let commandArr = arr[i].split(' ');

        let command;
        let passenger;

        if(commandArr.length > 1) {
            command = commandArr[0];
            passenger = commandArr[1];
        } else {
            passenger = Number(commandArr[0]);
        }

        if(command == 'Add') {
            wagons.push(passenger);
        } else {
            for (let index = 0; index < wagons.length; index++) {

                if (wagons[index] + passenger > capacity) {
                    continue;
                } else {
                    wagons[index] += passenger;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}


train([
'32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);