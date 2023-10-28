function reverseInPlace(arr) {
    let n = arr.length - 1;
    let reversed = [];

    for (let i = n; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log(reversed.join(' '));
}


// function reverseInPlace(arr) {

// console.log(arr.reverse().join(' '));
// }

reverseInPlace(['a', 'b', 'c', 'd', 'e']);