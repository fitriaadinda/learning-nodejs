function simpleArraySum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  let arr = [1, 2, 3, 4, 5];
  let totalSum = simpleArraySum(arr);
  
  console.log(totalSum);