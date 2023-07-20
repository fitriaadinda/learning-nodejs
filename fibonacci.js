function fibonacciAtIndex(index) {
    let sequence = [0, 1];
  
    for (let i = 2; i <= index; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence[index];
}

let result = fibonacciAtIndex(10);
console.log(result); // 55

//with a limit
function fibonacci(limit) {
    let sequence = [0, 1];
  
    for (let i = 2; i <= limit; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence;
}
let res = fibonacci(10);
console.log(res); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    