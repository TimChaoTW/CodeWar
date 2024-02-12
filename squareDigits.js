function squareDigits(num) {
  const numStr = num.toString().split("")
  let array = []
  for (let i = 0;i < numStr.length;i += 1){
    array.push((numStr[i]) **2)
  }
  return +array.join('');
}

console.log(squareDigits(3212)); //9414

console.log(squareDigits(2112)); //4114

console.log(squareDigits(0)); //0
