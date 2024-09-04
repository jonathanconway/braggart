import { Flex as ChakraFlex } from "@chakra-ui/react";
import { forwardRef } from "react";

import { LayoutProps } from "./layout.types";

export const Layout = forwardRef((props: LayoutProps, ref) => {
  return <ChakraFlex {...props} ref={ref} />;
});
