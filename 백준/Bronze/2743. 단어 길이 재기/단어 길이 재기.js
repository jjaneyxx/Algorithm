const input = require("fs").readFileSync(0).toString().trim();

// 입력받은 문자열을 배열로 분리해서 length 출력
console.log([...input].length);
