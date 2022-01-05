import "../scss/main.scss";

console.log("test");

async function babelTest() {
  const promise = Promise.resolve("babelTest");
  console.log(await promise);
}

babelTest();
