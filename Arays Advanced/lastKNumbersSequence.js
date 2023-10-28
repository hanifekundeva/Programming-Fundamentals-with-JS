function sequence (length, k) {
    let newArr = [1];

    while (newArr.length < length) {
      let lastKElements = newArr.slice(Math.max(newArr.length - k, 0), newArr.length); 
      let sum = 0;
  
      for (let element of lastKElements) {
        sum += element;
      }
      newArr.push(sum);
    }
    
    console.log(newArr.join(' '));
  }

sequence(6, 3)