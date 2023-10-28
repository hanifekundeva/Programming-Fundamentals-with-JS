function friendsList(arr) {
    let friends = arr.shift().split(", ");
    let command = arr.shift().split(" ");
 
    let countOfBlackListedNames = 0;
    let countOfLostNames = 0;
 
    while(command[0] !== "Report") {
        let action = command[0];
        let index;
 
        switch(action) {
            case "Blacklist":
                let personToBlacklist = command[1];
                let indexOfBlacklistedPerson = friends.indexOf(personToBlacklist);
                if(indexOfBlacklistedPerson === -1) {
                    console.log(`${personToBlacklist} was not found.`);
                } else {
                    friends[indexOfBlacklistedPerson] = "Blacklisted";
                    console.log(`${personToBlacklist} was blacklisted.`);
                    countOfBlackListedNames++;
                }
                break;
            case "Error":
                index = Number(command[1]);
                if(index >= 0 && index < friends.length) {
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
 
    console.log(`Blacklisted names: ${countOfBlackListedNames}`);
    console.log(`Lost names: ${countOfLostNames}`);
    console.log(friends.join(" "));
}

friendsList([
"Mike, John, Eddie",

"Blacklist Mike",

"Error 0",

"Report"]);