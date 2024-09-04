import {
  DeleteIcon as ChakraDeleteIcon,
  LinkIcon as ChakraLinkIcon,
} from "@chakra-ui/icons";
import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
  IconButton as ChakraIconButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChangeEvent, Fragment } from "react";

import { Button } from "../button";
import { Layout } from "../layout";
import { TextBox } from "../text-box";

import { BragLinksEditorProps } from "./brag-links-editor.types";
import { useBragLinksEditor } from "./use-brag-links-editor.hook";

export function BragLinksEditor(props: BragLinksEditorProps) {
  const {
    links,
    addLinkValue,
    addLinkDisabled,
    setAddLinkValue,
    addLink,
    deleteLink,
  } = useBragLinksEditor(props);

  function handleAddLinkValueChange(event: ChangeEvent<HTMLInputElement>) {
    setAddLinkValue(event.target.value);
  }

  function handleAddLinkClick() {
    addLink();
  }

  return (
    <Layout direction="column" gap="0.5rem">
      <Layout direction="row" gap="0.5rem">
        <TextBox
          placeholder="http://"
          value={addLinkValue}
          onInput={handleAddLinkValueChange}
        />
        <Button isDisabled={addLinkDisabled} onClick={handleAddLinkClick}>
          Add
        </Button>
      </Layout>

      <ChakraGrid
        templateColumns="1fr 3rem"
        rowGap="0.5rem"
        columnGap="0.5rem"
        {...props}
      >
        {links.map((link) => (
          <Fragment key={link}>
            <ChakraGridItem alignContent="center">
              <ChakraLink href="{link}" target="_blank">
                {link} <ChakraLinkIcon />
              </ChakraLink>
            </ChakraGridItem>
            <ChakraGridItem>
              <ChakraIconButton
                aria-label={`Delete link ${link}`}
                icon={<ChakraDeleteIcon />}
                onClick={deleteLink(link)}
              />
            </ChakraGridItem>
          </Fragment>
        ))}
      </ChakraGrid>
    </Layout>
  );
}
