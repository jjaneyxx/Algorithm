const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = +input[0]; // 테캐

for (let i = 1; i <= n; i++) {
  const howMany = {};
  let line = input[i].replace(/\s/g, ""); // 문자열 공백 제거 -> appplelove
  // 객체 완성 : { a: 1, p: 3, l: 2, e: 2, o: 1, v: 1 }
  for (let alphabet of line) {
    howMany[alphabet] = (howMany[alphabet] || 0) + 1;
  }

  // 객체 순회 이전 초기 설정
  let maxKey = "";
  let maxValue = 0;
  let hasDuplications = false;

  // 객체를 [키, 값] 배열로 변환하고 순회
  for (let [key, value] of Object.entries(howMany)) {
    if (value > maxValue) {
      maxValue = value; // 현재 값이 더 크므로 maxValue 갱신
      maxKey = key; // 해당 키도 maxKey 로 갱신
      hasDuplications = false;
    } else if (value === maxValue) {
      // hasDuplications 값만 바꾸고, 이어서 순회해야 하므로
      hasDuplications = true;
    }
  }
  // for 문이 끝나면 -> maxKey 는 가장 큰 값을 갖는 키
  hasDuplications === true ? console.log("?") : console.log(maxKey);
}
