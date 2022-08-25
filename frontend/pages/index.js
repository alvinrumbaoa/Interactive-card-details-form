import Head from 'next/head'
import {Box, Heading, Text, Flex, Grid, Image, Link, HStack, VStack, useColorMode, useColorModeValue} from'@chakra-ui/react'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react';

export default function Home() {

  const [name, setName] = useState("Jane Doe");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cvv, setCvv] = useState("000");


  return (
    <Flex h="100vh" > 
      <Head>
        <title>Interactive card details form</title>
        <meta name="description" content="Alvin Rumbaoa | Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex  w='600px' h="100%" bgColor="#21092F">
        <Image src="/images/Group 10.png"  w="683px"></Image>
      </Flex>
      <Box w='500px' h='300px' boxShadow='xl' p='6' rounded='md'  ml={250} mt={100} pos="absolute" backgroundImage="url('/images/Oval Copy 2.png')" backgroundRepeat="no-repeat">
        <Flex direction="row"> 
         <Box m="20px"bgColor="#DEDDDF"  w="50px" h="50px" borderRadius="50%"/>
         <Box mt="27px" border=" 2px solid #DEDDDF" w="20px" h="20px" borderRadius="50%"/>
        </Flex>
         
      
           <Text pl={5}  mt={6  } color="white" fontSize="4xl" fontWeight="500">{cardNumber}</Text>
         <Flex direction="row" justify="space-between"> 
          <Text p={5}  mt={3}color="white" fontSize="md" fontWeight="500">{name}</Text>
          <Text p={5}  mt={3}color="white" fontSize="md" fontWeight="500">{cardMonth}/{cardYear}</Text>
         </Flex>
        
        
      </Box>
      <Box display="flex" w='500px' h='300px' ml={350} mt={500} pos="absolute" borderRadius="10px" bgColor="#D2D3D9">
        <Text color="white" fontSize="lg" fontWeight="500">{cvv}</Text>
      </Box>
    </Flex>
  )
}
