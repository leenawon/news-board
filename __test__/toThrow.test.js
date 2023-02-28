test("TypeError 에러가 발생한다.", () => {
  const errorFunc = () => {
    throw new TypeError();
  };
  expect(errorFunc).toMatch(TypeError);
});
