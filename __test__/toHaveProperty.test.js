const info = {
  name: "nawon",
  age: "25",
  job: {
    name: "frontend developer",
    location: "apgujeong rodeo",
  },
};

test("이 사람은 다음 옵션을 가지고 있다.", () => {
  expect(info).toHaveProperty("name");
  expect(info).toHaveProperty("job.name", "frontend developer");
});
