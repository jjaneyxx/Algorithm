const fs = require('fs');
let input = fs.readFileSync(0).toString().trim(); 
let alphabet = ''; 
let answer = ''; 
// input : baekjoon

for (let i=97 ;i<=122; i++){
  // 아스키코드를 문자로 변환
  alphabet = String.fromCharCode(i); 
  if(input.includes(alphabet)){
    // 포함한다면 index 출력
    answer += input.indexOf(alphabet)+' '
  } else {
    answer += '-1'+' '
  }
}

// 문자열 answer 에 담아서 출력, trim 으로 맨 끝 공백을 제거 
console.log(answer.trim()) ;