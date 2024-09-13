let n = require("fs").readFileSync(0).toString().trim();
let oct = ""; // 8진수 결과를 저장할 빈 문자열

while (n.length >= 3) {
  // 맨 끝의 3자리 2진수를 잘라 10진수 -> 8진수로 바꾸고, oct 앞에 추가
  oct = parseInt(n.slice(n.length - 3), 2).toString(8) + oct;
  // 8진수로 변환된 3자리를 원래 2진수 문자열에서 제거
  n = n.slice(0, n.length - 3);
}

console.log((n ? parseInt(n, 2).toString(8) : "") + oct);