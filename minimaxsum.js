function findMinMax(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      
      if (i >= 3) {
        minSum = Math.min(minSum, currentSum - arr[i]);
        maxSum = Math.max(maxSum, currentSum - arr[i - 3]);
      }
    }
    
    return [minSum, maxSum];
  }

  let arr = [5, 2, 7, 1, 9];
let results = findMinMax(arr);
console.log(results);
