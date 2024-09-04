import { describe, expect, it } from "vitest";

import { groupByFirst } from "./array.utils";

describe("groupByFirst", () => {
  it("groups by first item of each key value", () => {
    const items = [
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
    ];

    const result = groupByFirst(items, "id");

    expect(result).toEqual({
      "1": {
        id: "1",
        value: "one",
      },
      "2": {
        id: "2",
        value: "two",
      },
      "3": {
        id: "3",
        value: "three",
      },
    });
  });
});
