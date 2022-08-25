import React,{useEffect} from "react"
import {Container ,Flex,  useColorMode , ChakraProvider ,useColorModeValue}  from '@chakra-ui/react'


const Layout = ({children})  => {
	return (
		<Flex bgColor="#FFF7F0"  direction="column" >   
		
				{children}
			
		</Flex>
	)
}

export default Layout
