function firstAndLastNumbers (arr) {

    let k = arr.shift();

    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.slice((arr.length - k), arr.length)

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstAndLastNumbers([
    2, // k
    7, 
    8, 
    9]
    );