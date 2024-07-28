
let input = require('fs').readFileSync(0).toString().trim().split('\n');
let T = input[0]; // 테캐 수


// 테스트케이스를 하나씩 순회 
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
      count = 0 ; // 부분점수 
    }
    
    // 테캐 score 에 count 더함
    caseScore += count; 
  }

  // 다음 테케를 순회하기 이전, 현재 테캐 score 출력
  console.log(caseScore); 
}