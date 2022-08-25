import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import "@fontsource/space-grotesk"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '920px',
  xl: '1440px',
  '2xl': '1536px',
})

const theme = extendTheme({

  breakpoints,
  fonts: {
    heading: '"Space Grotesk", sans-serif; ',
    body: '"Space Grotesk", sans-serif;',
  },
 
})

export default theme