const path = require("path");

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), // path 옵션은 반드시 절대 경로 명시, default는 dist
    // filename: "main.js", // default는 main.js
    clean: true, // 빌드시, 기존에 생성된 dist 제거 후 재 생성
  },
};
