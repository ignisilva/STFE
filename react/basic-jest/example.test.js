// to ~
describe("expect test", () => {
  // toBe: 레퍼런스 값 비교
  it("toBe", () => {
    expect(37).toBe(37);
  });

  // toEqual: 값 비교
  it("toEqual", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  // toHaveLength: 길이 값 확인
  it("toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });

  // toHaveProperty: 속성 및 해당 속성 값 확인
  it("toHaveProperty", () => {
    expect({ name: "Mark" }).toHaveProperty("name");
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });

  // toBeDefined: undefined가 아닌지 확인
  it("toBeDefined", () => {
    expect({ name: "Mark" }.name).toBeDefined();
    // expect({ name: "Mark" }.age).toBeDefined();  // error
  });

  // toBeFalsy: false인지 확인
  it("toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  // toBeGreaterThan: input값이 테스트 값보다 높은지 확인
  it("toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
    expect(1).toBeGreaterThan(0);
  });

  // toBeGreaterThanOrEqual: input값이 테스트 값보다 같거나 높은지 확인
  it("toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(9);
    expect(1).toBeGreaterThanOrEqual(1);
  });

  // toBeInstanceOf: 인스턴스인지 확인 (error 확인시, 어떤 에러의 자식 에러인지 확인할 때 유용)
  it("toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});

// async-await
describe("use async test", () => {
  it("async-await", async () => {
    function p() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(37);
        }, 100);
      });
    }

    const data = await p();
    return expect(data).toBe(37);
  });

  it("async-await, catch", async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("error"));
        }, 100);
      });
    }

    try {
      await p();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
