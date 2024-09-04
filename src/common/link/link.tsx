import { Link as ChakraLink, Text as ChakraText } from "@chakra-ui/react";
import { forwardRef } from "react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";

import { Props } from "@/utils";

type LinkProps = ReactRouterLinkProps &
  Props<typeof ChakraLink> & {
    readonly isDisabled?: boolean;
  };

export const Link = forwardRef((props: LinkProps, ref: any) => {
  if (props.isDisabled) {
    return (
      <ChakraText
        color="InactiveCaptionText"
        fontSize={props.fontSize}
        ref={ref}
      >
        {props.children}
      </ChakraText>
    );
  }
  return <ChakraLink as={ReactRouterLink} {...props} ref={ref} />;
});
