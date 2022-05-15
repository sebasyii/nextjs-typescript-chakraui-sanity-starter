import { extendTheme } from "@chakra-ui/react";
import * as foundations from "./foundations";
import * as components from "./components";

export const theme = extendTheme({
  ...foundations,
  components: { ...components },
});
