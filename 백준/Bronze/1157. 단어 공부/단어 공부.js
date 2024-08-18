let input = require("fs").readFileSync(0).toString().trim().toLowerCase();
// input : mississipi

// a-z 는 26개 이므로, 26개의 요소로 이루어진 배열을 만들고 0으로 채움
const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true; // 가장 많이 사용된 알파벳 여러 개 중복 !
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
