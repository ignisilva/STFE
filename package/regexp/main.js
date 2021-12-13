const str = `
010-0000-0000
test@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aaddcc
`;

// const regexp = new RegExp("the", "gi");
const regexp = /the/gi;
console.log(str.match(regexp));

// 문자열 replace
const replaceReg = /test/gi;
console.log(str.replace(regexp, "AAA"));

// 문자열 match
// \.$ : .으로 끝나는 문자열 검색
const matchReg = /\.$/gim;
console.log(str.match(matchReg));
