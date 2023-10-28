function searchOfElemnt (arr1, arr2) {
    let numOfEl = arr2[0];
    let newArr = arr1.slice(0, numOfEl);

    let elementsToRemove = arr2[1];
    newArr.splice(0, elementsToRemove);
    let searchedNumCount = 0;
    let searchedNum = arr2[2];

    for (let item of newArr) {
        
        if (item == searchedNum) {
            searchedNumCount++;
        }
    }
console.log(`Number ${searchedNum} occurs ${searchedNumCount} times.`);
}

searchOfElemnt([
    5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );