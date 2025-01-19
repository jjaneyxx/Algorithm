let input = require('fs').readFileSync(0).toString().trim().split('\n');
let T = input[0]; // 테캐 수

for (let i=1; i<=T; i++){

  let count = 0; 
  let caseScore = 0; 
  let str = input[i];
  let len = str.length; 

  // 테스트케이스 하나를 순회
  for (let i=0; i<len; i++){
    if (str[i] === 'O'){
      count ++ ; // 부분점수
    } else {
      count = 0 ; 
    }

    caseScore += count; 
  }

  console.log(caseScore); 
}