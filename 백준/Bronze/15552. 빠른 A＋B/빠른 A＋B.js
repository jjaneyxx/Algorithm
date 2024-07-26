// 여러 줄, 첫 줄에 테케 수 

const fs = require('fs'); 
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = Number(input[0]);
// console.log(num); // 5
let arr = []; 
let str = ""; 

for (let i=1; i<=num; i++){
  // 요소는 str
  arr = input[i].split(' ') // 배열 
  let sum = Number(arr[0]) + Number(arr[1]); // 왜arr 는 미리 [] 를 지정해야 하고 sum 여기서 선언해도 되는지 모르겠음 
  str += sum +'\n'; 
} 

console.log(str); 
