let [N, arr] = require("fs").readFileSync(0).toString().trim().split("\n");
N = +N; // 3
arr = arr.split(" ").map(Number); // [1,3,5,7]
let check = new Array(N).fill(true);

for (let i = 0; i < N; i++) {
  if (arr[i] === 1) check[i] = false;
  else {
    // 배열 arr 순회
    for (let s = 2; s <= Math.sqrt(arr[i]); s++) {
      if (arr[i] % s === 0) {
        // arr[i] != 소수
        check[i] = false;
        break;
      }
    }
  }
}

// 배열에서 true 인 요소 개수 출력
console.log(check.filter((item) => item === true).length);