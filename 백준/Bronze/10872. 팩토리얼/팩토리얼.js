const input =require('fs').readFileSync(0).toString().trim();
let num = Number(input);
//console.log(num);

let answer = 1; 

for (let i = num ; i>0 ; i--){
  if(num === 0){
    console.log(answer); 
  } else {
    answer *= i; 
  }
}

console.log(answer); 
