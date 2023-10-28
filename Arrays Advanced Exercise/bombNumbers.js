function bombNumbers (nums, bombInfo) {
    let bombNum = bombInfo[0];
    let power = bombInfo[1];

    while (nums.includes(bombNum)) {
        let indexOfBomb = nums.indexOf(bombNum);
        nums.splice(Math.max((indexOfBomb - power), 0), (power * 2) + 1 );
    }
       
    let sum = 0;
    for(let item of nums) {
        sum += item;
    }
    console.log(sum);
}


bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );