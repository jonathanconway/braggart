import {
  CheckIcon as ChakraCheckIcon,
  CloseIcon as ChakraCloseIcon,
  EditIcon as ChakraEditIcon,
} from "@chakra-ui/icons";

import { Icons } from "./icon.types";

export const ICON_COMPONENTS_BY_ICON = {
  [Icons.Check]: ChakraCheckIcon,
  [Icons.Close]: ChakraCloseIcon,
  [Icons.Edit]: ChakraEditIcon,
};
