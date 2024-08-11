let input = require("fs").readFileSync(0).toString().trim();

const ascending = "1 2 3 4 5 6 7 8";
const descending = "8 7 6 5 4 3 2 1";

/*
입력받은 요소가 1에서 시작, 1씩 커지고, 개수가 8개
입력받은 요소가 8에서 시작, 1씩 작아지고, 개수가 8개
그 외 : mixed 
*/

if (input === ascending) {
  answer = "ascending";
} else if (input === descending) {
  answer = "descending";
} else {
  answer = "mixed";
}

console.log(answer);
