import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#2b3137',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.300',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})
export default theme;