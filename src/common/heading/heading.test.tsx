import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading } from "./heading";
import { createHeadingPropsMock } from "./heading.mocks";
import { HeadingLevel } from "./heading.types";

describe("heading", () => {
  describe("<Heading />", () => {
    it("renders", () => {
      render(<Heading {...createHeadingPropsMock()} />);
    });

    it.each`
      as      | level
      ${"h1"} | ${1}
      ${"h2"} | ${2}
      ${"h3"} | ${3}
    `("renders correct element and size when as=%s", ({ as, level }) => {
      render(
        <ChakraProvider theme={theme}>
          <Heading {...createHeadingPropsMock()} as={as as HeadingLevel} />
        </ChakraProvider>,
      );

      const heading = screen.getByRole("heading", { level });
      expect(heading).toBeTruthy();
    });
  });
});
