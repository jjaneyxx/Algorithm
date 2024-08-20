let input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = input.length - 1; // 케이스 개수

for (let i = 0; i < N; i++) {
  let arr = input[i].split(" ").map(Number);
  arr = arr.sort((a, b) => a - b); // sort , 비교함수 이용해 오름차순 정렬
  Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2) ? console.log("right") : console.log("wrong");
}