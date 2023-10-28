function rightPlace (word, symbol, match) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            result += symbol;
        } else {
            result += word[i];
        }
    }
    if (result == match) {
        console.log('Matched');

    } else {
        console.log('Not Matched');
    }
}


// function rightPlace (string, symbol, match) {
//     let result = string.replace('_', symbol);
//     if (result == match) {
//         console.log('Matched');

//     } else {
//         console.log('Not Matched');
//     }

//  }


rightPlace('Str_ng',
'i',
'String');