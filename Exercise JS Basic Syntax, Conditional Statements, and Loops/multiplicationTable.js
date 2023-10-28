function multiplicationTable (num) {
    
    for (let startNum = 1; startNum <= 10;  startNum++) {
        console.log(`${num} X ${startNum} = ${startNum * num}`);
    }
}

multiplicationTable(5);