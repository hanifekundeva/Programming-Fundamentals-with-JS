function sorting (arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let finalArr = [];

    while (sortedArr.length > 0) {
      let bigestNum = sortedArr.pop();
      let smallestNum = sortedArr.shift();

      finalArr.push(bigestNum);
      finalArr.push(smallestNum);
    }
    console.log(finalArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);