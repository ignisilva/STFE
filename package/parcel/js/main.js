console.log("Hello Parcel");

async function babelTest() {
  const promise = Promise.resolve("test");
  console.log(await promise);
}

babelTest();
