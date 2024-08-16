let input = require("fs").readFileSync(0).toString().trim().split("\n");
const T = +input[0]; // 테캐 개수
let floor = 0;
let room = 0;
let answer = "";

for (let i = 1; i <= T; i++) {
  let arr = input[i].split(" ").map((v) => +v); // 새로운 배열에 담기

  if (arr[2] % arr[0] === 0) {
    // 나누어 떨어짐
    floor = arr[0];
    room = Math.floor(arr[2] / arr[0]);
  } else {
    floor = arr[2] % arr[0];
    room = Math.floor(arr[2] / arr[0]) + 1;
  }

  if (room < 10) {
    room = "0" + room;
  }

  console.log(`${floor}${room}`);
}
