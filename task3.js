const arr = [1, 2, 3, 4, 5, 6];
const [firstNum, secondNum, thirdNum, ...rest] = arr
console.log('firstNum', firstNum)
console.log('secondNum', secondNum)
console.log('thirdNum', thirdNum)
console.log('rest', rest)