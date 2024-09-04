import { Divider } from "@chakra-ui/react";

import { Box, Button, Heading, Layout, Link, Text } from "@/common";

import { createBragTypesScreenPath } from "../brag-types.route";

import { BragTypeEditor } from "./brag-type-editor";
import { useBragTypesEditor } from "./use-brag-types-editor.hook";

export function BragTypesEditor() {
  const { bragTypes, selectedBragType, clearBragType } = useBragTypesEditor();

  return (
    <Layout direction="row" gap="3rem">
      <Box width="30%">
        <Layout direction="column" gap="1rem">
          <Heading as="h3">Brag types</Heading>
          <Layout direction="column" gap="1rem">
            <Layout direction="column" gap="0.5rem">
              {bragTypes?.map((bragType) => (
                <Box>
                  <Layout direction="row" gap="0.5rem">
                    <Text
                      flex={1}
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      fontSize="sm"
                      fontWeight={
                        bragType === selectedBragType ? "bold" : "regular"
                      }
                    >
                      {bragType.title}
                    </Text>
                    <Link
                      isDisabled={bragType.id === selectedBragType?.id}
                      color="firebrick"
                      fontSize="sm"
                      to={createBragTypesScreenPath(bragType.id)}
                    >
                      Edit
                    </Link>
                  </Layout>
                </Box>
              ))}
              <Divider />
              <Layout direction="row" justifyContent="end">
                <Box>
                  <Button size="xs">Add</Button>
                </Box>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Box>
      <Box flex={1}>
        {selectedBragType && (
          <BragTypeEditor bragType={selectedBragType} onClose={clearBragType} />
        )}
      </Box>
    </Layout>
  );
}
