let input = require("fs").readFileSync(0).toString().trim();

console.log(
  input.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith("<")) {
      return match;
    }
    return [...match].reverse().join("");
  })
);

// 두 패턴 중 하나에 매칭되는 부분이 있을 때마다 그 매칭된 부분이 match 에 들어감
// 익명함수로 replaced 된 결과를 출력함