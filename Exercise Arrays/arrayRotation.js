function arrayRotation(arr, rotationCount) {
    for (let rotation = 0; rotation < rotationCount; rotation++) {
        let firstEl = arr.shift();
        arr.push(firstEl)
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);