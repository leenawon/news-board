const info_1 = {
  name: "nawon",
};

const info_2 = {
  name: "nawon",
};

test("두 사람의 정보가 동일하다.", () => {
  expect(info_1).toEqual(info_2);
});
