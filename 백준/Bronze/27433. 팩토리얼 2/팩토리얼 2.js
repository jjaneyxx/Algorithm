//0:27:08
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let num = Number(input);
let answer = 1;

// console.log(input); //10

for (let i =num ; i>0 ; i--){
  answer = answer*i;
}
console.log(answer); // 3628800

