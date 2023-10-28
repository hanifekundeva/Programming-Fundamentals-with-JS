function distinctArray (arr) {
    let newArr = [];

    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        } 
    }
console.log(newArr.join(' '));
}

distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);