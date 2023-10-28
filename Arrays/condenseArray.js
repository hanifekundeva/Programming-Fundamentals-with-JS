function condenseArray(arr) {

    while (arr.length > 1 ) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] + arr[i + 1];    
        }
        arr.pop()
    }
    console.log(arr[0]);
}

condenseArray([5, 0, 4, 1, 2]);

