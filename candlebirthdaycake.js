function countTallestCandles(candles) {
    // Find the maximum value in the array
    const maxCandleHeight = Math.max(...candles);
    
    // Count how many times the maximum value appears
    let tallestCandlesCount = 0;
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] === maxCandleHeight) {
        tallestCandlesCount++;
      }
    }
    
    // Return the count of tallest candles
    return tallestCandlesCount;
  }
  

  const candles = [4, 4, 1, 3];
const tallestCandlesCount = countTallestCandles(candles);
console.log(`There are ${tallestCandlesCount} tallest candles.`);