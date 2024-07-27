//charAt, subString, split 메서드를 이용할 수 있음
const input = require('fs').readFileSync(0).toString().split('\n'); 
// console.log(input); 

const word = input[0]; // 글자
const num  = Number(input[1]);

const answer = word.charAt(num-1); 
console.log(answer) ; 
