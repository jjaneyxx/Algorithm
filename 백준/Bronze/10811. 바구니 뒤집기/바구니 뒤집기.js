const input = require("fs").readFileSync(0).toString().trim().split("\n");
// N : 바구니 개수, M : 역순으로 만드는 횟수
const [N, M] = input[0].split(" ").map(Number);
let arr = [];

// arr = [ 1, 2, 3, 4, 5 ]
for (let s = 0; s < N; s++) {
  arr[s] = s + 1;
}

for (let s = 1; s <= M; s++) {
  let [i, j] = input[s].split(" ");

  // 임시 배열
  let temp = [];

  // i 번째 바구니부터 j 번째 바구니까지 temp 에 담음
  for (let s = i - 1; s < j; s++) {
    temp.push(arr[s]);
  }

  // temp 를 reverse 로 뒤집고 기존 바구니들(arr) 을 splice 로 잘라냄
  // 그 자리에 reverse 된 temp 넣음
  // i부터 j까지 개수 : (j-1)-(i-1)+1 = j-i+1 
  temp.reverse();
  arr.splice(i - 1, j - i + 1, ...temp);
}

// 배열 -> 문자열 
console.log(arr.join(" "));

/*
1번 바구니는 배열의 0번 인덱스에 담기고 
2번 바구니는 배열의 2-1 = 1번 인덱스에 담김
*/
