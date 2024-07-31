let input = require("fs").readFileSync(0).toString().trim().split("\n");

let [hour, minute] = input[0].split(" ").map((v) => +v); // 14, 30
let need = +input[1]; // 20분

if (minute + need < 60) {
  minute = need + minute;
} else {
  // minute + need >= 60
  hour += Math.floor((minute + need) / 60);
  minute = (minute + need) % 60;

  if (hour > 23) {
    // hour 이 00 시를 넘어가는 순간 : 24시, 25시,,
    hour = hour - 24;
  }
}

console.log(`${hour} ${minute}`);