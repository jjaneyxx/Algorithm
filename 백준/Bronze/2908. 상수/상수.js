const input = require("fs").readFileSync(0).toString().trim().split(" ");
let temp = [];

// 배열 요소를 각각 배열로 분리 -> reverse -> 다시 문자열로 합치기
// 바뀐 새 문자열을 새로운 배열에 push, 배열 요소를 ..., Math.max

for (let i = 0; i < 2; i++) {
  temp.push([...input[i]].reverse().join(""));
}

temp = temp.map(Number);
console.log(Math.max(...temp));
