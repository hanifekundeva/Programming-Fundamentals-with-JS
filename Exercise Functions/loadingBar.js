function loadingBar(num) {
    let percentCount = num / 10;
    let result = `${num}% [`;

    if (num == 100) {
        console.log(`${num}% Complete!`);
        return
    }
    
    for (let i = 0; i < 10; i++) {
        if (i < percentCount) {
            result += '%';
        } else {
            result += '.';
        }
    }
    result += ']\r\n';
    result += 'Still loading...'
    console.log(result);
}

loadingBar(30);