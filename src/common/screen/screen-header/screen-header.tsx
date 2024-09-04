import {
  Box as ChakraBox,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { Box, Link } from "@/common";
import { createBragTypesScreenPath } from "@/screens/brag-types";
import { Props } from "@/utils";

export type ScreenHeaderProps = Props<typeof ChakraBreadcrumb>;

export function ScreenHeader({ children, ...restProps }: ScreenHeaderProps) {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <ChakraBreadcrumb {...restProps}>
        <ChakraBreadcrumbItem>
          <ChakraBreadcrumbLink as={Link} to="/" color="firebrick">
            <ChakraBox py="1rem" fontFamily='"Jersey 25"' fontSize="1.5rem">
              Braggart
            </ChakraBox>
          </ChakraBreadcrumbLink>
        </ChakraBreadcrumbItem>
        {children}
      </ChakraBreadcrumb>
      <Spacer />
      <Box>
        <Link to={createBragTypesScreenPath()}>Brag types</Link>
      </Box>
    </Flex>
  );
}
