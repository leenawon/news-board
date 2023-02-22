describe("spy", () => {
  let foo;
  let bar;

  beforeEach(() => {
    foo = {
      setBar(value) {
        bar = value;
      },
    };
    jest.spyOn(foo, "setBar");

    foo.setBar(999);
  });

  it("호출 여부 검증", () => {
    // expect(foo.setBar).toHaveBeenCalled();
    // expect(foo.setBar).toHaveBeenCalledWith(999);
    expect(foo.setBar).toHaveBeenCalledTimes(1);
  });
});
