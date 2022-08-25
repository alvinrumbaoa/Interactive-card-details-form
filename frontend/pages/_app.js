import Layout from '../components/Layout'
import { ChakraProvider , useColorMode , useColorModeValue} from '@chakra-ui/react'
import theme from '../components/theme.fonts'

function MyApp({ Component, pageProps }) {

 


  return (
   
          <ChakraProvider theme={theme}>
        
                <Component {...pageProps} />
       

          </ChakraProvider>
   
   
  )
}

export default MyApp
