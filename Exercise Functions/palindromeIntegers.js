function palindromeInts(arr) {

    function checkIsPalindrome(num) {
        let numAsStr = String(num);
        let reversedNumStr = '';

        for (let i = numAsStr.length - 1; i >= 0; i--) {
            let curChar = numAsStr[i];
            reversedNumStr += curChar;
        }

        let isPalindrome = numAsStr == reversedNumStr;
        return isPalindrome;
    }

    for (let curNum of arr) {
        let isPalindrome = checkIsPalindrome(curNum);
        console.log(isPalindrome);
    }
}


// function palindromeInts (arr) {
//     for (let num of arr) {
//         let numStr = String(num);
//         let reversedNumStr = numStr.split('').reverse().join('');
//         console.log(numStr == reversedNumStr);
//     }
// }


palindromeInts([123, 323, 421, 121]);