function sortArrByTwoCrititeria (arr) {
    let sortedArr1 = arr.sort(function(a, b) {
        let sortedByLength = a.length - b.length;
        if (sortedByLength === 0) {
            return a.localeCompare(b);
        } else {
            return sortedByLength;
        }
    }) 
        console.log(sortedArr1.join("\n"));
}


sortArrByTwoCrititeria(['alpha', 'beta', 'gamma']);