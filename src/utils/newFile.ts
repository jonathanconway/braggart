import { groupByFirst } from "./array.utils";

describe("groupByFirst", () => {
  it("groups by first item of each key value", () => {
    const result = groupByFirst([
      {
        id: "1",
        value: "one",
      },
      {
        id: "2",
        value: "two",
      },
      {
        id: "3",
        value: "three",
      },
      {
        id: "1",
        value: "four",
      },
    ]);

    expect(result).toEqual({
      "1": "one",
      "2": "two",
      "3": "three",
    });
  });
});
