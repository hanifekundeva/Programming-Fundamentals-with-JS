function printAndSum (start, end) {
   let result = '';
   let totalSum = 0;

   for (let i = start; i <= end; i++) {
      totalSum += i;
      result += i + ' ';
   }
console.log(result);
console.log(`Sum: ${totalSum}`);
}

printAndSum(5, 10);