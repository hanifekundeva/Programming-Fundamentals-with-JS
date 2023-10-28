function friends (arr) {
    let friends = arr.shift().split(", ");
    let command = arr.shift().split(" ");

    let countOfBlackListNames = 0;
    let countOfLostNames = 0;

    while (command[0] !== 'Report') {
        let action = command[0];
        let index;

        switch (action) {
            case "Blacklist":
                let personToBlackList = command[1];
                let indexOfBlackListedPerson = friends.indexOf(personToBlackList);
                if(indexOfBlackListedPerson == -1) {
                    console.log(`${personToBlackList} was not found.`);
                } else {
                    friends[indexOfBlackListedPerson] = "Blacklisted";
                    console.log(`${personToBlackList} was blacklisted.`);
                    countOfBlackListNames++
                }
                break;
            case "Error":
                index = Number(command[1]);
                if (index >= 0 && index < friends.length) {
                    if(friends[index] !== "Blacklisted" && friends[index]!== "Lost") {
                        console.log(`${friends[index]} was lost due to an error.`);
                        friends[index] = "Lost";
                        countOfLostNames++; 
                    }
                }
                break;
            case "Change":
                index = Number(command[1]);
                let newName = command[2];
                if(index >= 0 && index < friends.length) {
                    console.log(`${friends[index]} changed his username to ${newName}.`);
                    friends[index] = newName;
                }
                break;
        }
     command = arr.shift().split(" ");
    }
        console.log(`Blacklisted names: ${countOfBlackListNames}`);
         console.log(`Lost names: ${countOfLostNames}`);
        console.log(friends.join(" "));                                  
}

  
    friends([
        "Mike, John, Eddie",
        
        "Blacklist Mike",
        
        "Error 0", 
        
        "Report"]);