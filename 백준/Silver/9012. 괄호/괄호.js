let input = require("fs").readFileSync(0).toString().trim().split("\n");
const caseCount = +input[0]; // 6 

for (let i = 1; i <= caseCount; i++) {
  const cases = input[i]; // 각 케이스
  const stack = []; // 빈 스택 선언
  let result = true; // result 초기값은 YES : 처음에는 스택이라고 가정

  // 각 케이스를 순회합니다
  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1); // 여는 괄호가 나왔을 때 1을 스택에 추가
    } else if (cases[j] === ")") {
      // 닫는 괄호를 만나면 짝이 되는 여는 괄호가 있는지 확인해야 함
      // 그 작업이 stack.pop() : 스택에 마지막에 넣은 1을 꺼냄
      // 정상적인 경우, 여는 괄호가 스택에 있어야 하므로 1이 반환됨
      // stack.pop() 이 undefined ? 스택이 비어있다는 뜻 = 이전에 여는 괄호가 없었다는 뜻
      // stack.pop 이 undefined -> 거짓 -> !stack.pop() 은 true -> 조건문 안으로 들어가게 됨
      if (!stack.pop()) {
        // 조건문이 실행된다는 것 = stack.pop 이 undefined 였다는 것 = 괄호가 짝이 맞지 않다는 것
        // 괄호의 짝이 맞지 않는 상태를 발견했다면 -> 더 이상 비교가 필요 없으므로
        // result 가 NO 로 만들고 바로 for 문을 종료
        // if(!stack.pop) 은 두가지를 동시에 함 : stack.pop 실행, if 조건 확인
        // stack.pop() 이 실제로 값을 꺼내고 그 결과를 바탕으로 조건을 확인함
        result = false;
        break;
      }
    }
  }
  // for 루프가 끝났는데 stack.length 가 0 이 아니라는 건 = 짝을 이루지 않는 외톨이 괄호가 있다는 것
  if (stack.length !== 0) {
    result = false;
  }
  // 케이스의 result 를 출력 : YES 나 NO
  // 이후 위로 올라가 다음 case 를 검사
  result === false ? console.log("NO") : console.log("YES");
}
