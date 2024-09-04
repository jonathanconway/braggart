import { Button, ButtonProps } from "@chakra-ui/react";
import { LinkProps } from "react-router-dom";

import { Box } from "../box";
import { KeyLabel } from "../key-label";
import { Layout } from "../layout";
import { Link } from "../link";
import { Text } from "../text";

export type AddBragButtonProps = LinkProps &
  ButtonProps & {
    readonly character: string;
    readonly title: string;
  };

export function AddBragButton({
  character,
  title,
  ...restProps
}: AddBragButtonProps) {
  return (
    <Button
      as={Link}
      width="6rem"
      height="6rem"
      _hover={{ textDecoration: "none" }}
      data-group
      {...restProps}
    >
      <Layout direction="column" alignItems="center" gap="0.5rem">
        <KeyLabel>{character.toUpperCase()}</KeyLabel>

        <Text
          height="2rem"
          textAlign="center"
          display="inline-flex"
          alignItems="center"
          fontSize="0.85rem"
          whiteSpace="wrap"
          _groupHover={{ textDecoration: "underline" }}
        >
          {title}
        </Text>
      </Layout>
    </Button>
  );
}
