const input = Number(require("fs").readFileSync(0).toString().trim());

let result = 0; // 생성자, 못 찾으면 0 

// 생성자는 1부터 입력값 -1 사이에 존재하므로 이 구간을 탐색함 
for (let i = 0; i < input; i++) {
  let sum = i; // 현재 숫자 자체를 먼저 저장, 이후 각 자릿수도 더해줄 예정
  let num = i; // 자릿수를 계산하기 위한 임의의 변수 
  // num(i)의 각 자릿수를 모두 더하는 반복문 
  while (num > 0) {
    sum += num % 10; // 가장 오른쪽 자릿수를 sum 에 더함 
    num = Math.floor(num / 10); // num의 가장 오른쪽 자릿수를 제거
  }

  // sum : i + i 를 쪼갠 자릿수의 합, input : 입력된 분해합
  // 둘이 같다 = 현재 i 가 분해합의 가장 작은 생성자 
  if (sum === input) {
    result = i; 
    break; // 답을 찾았으므로 전체 for문 종료 
  }
}

console.log(result);