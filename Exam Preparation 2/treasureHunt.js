function treasureHunt (arr) {
    let loot = arr.shift().split('|');
    let command = arr.shift();

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Loot') {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));
           
            // for (let item of items) {
            //     loot.unshift(item);
            // }
        } else if (action == 'Drop') {
            let idx = Number(tokens.shift());

            if (idx >= 0 && idx < loot.length) {
                let removedItem = loot.splice(idx, 1).shift();
                loot.push(removedItem);

            }

        } else if (action == 'Steal') {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }


        command = arr.shift();
    }
    
    if (loot.length == 0) {
        console.log('Failed treasure hunt.');
    } else { 
        let totalGain = 0;

        for (let item of loot) {
        totalGain += item.length;
        }
        let avgGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }  
}


treasureHunt([
"Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);



// function treasureHunt (arr) {
//     let treasure = arr.shift().split('|');
//     let command = arr.shift();

//     while (command !== 'Yohoho!') {
//         let tokens = command.split(' ');
//         command = tokens[0];

//         switch (command) {
//             case 'Loot':
//                 let items = tokens.splice(1, tokens.length);
//                 for (let item of items) {
//                     if (!treasure.includes(item)) {
//                         treasure.unshift(item);
//                     }
//                 }
//                 break;
//             case 'Drop':
//                 let index = Number(tokens[1]);
//                 if (index < 0 || index >= treasure.length) {
//                     continue
//                 } else {
//                 let removedItem = treasure.splice(index, 1);
//                 treasure.push(removedItem);
//                 }
//                 break;
//             case 'Steal':
//                 let itemsToRemoveCount = Number(tokens[1]);
//                 let removedItems = treasure.splice(-itemsToRemoveCount);
//                 console.log(removedItems.join(',' ));
//                 break;
//         }
//         command = arr.shift();
//     }
// }

// treausureHunt(([
// "Diamonds|Silver|Shotgun|Gold",
// "Loot Silver Medals Coal",
// "Drop -1",
// "Drop 1",
// "Steal 6",
// "Yohoho!"])
// );