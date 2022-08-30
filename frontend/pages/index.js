import Head from 'next/head'
import {Box, Heading, Text, Flex, Grid, Image, Button,Link, Input, HStack, VStack, useColorMode, useColorModeValue} from'@chakra-ui/react'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default function Home() {

  const [name, setName] = useState("MARY TESS");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000 ");
  const [cardMonth, setCardMonth] = useState("0");
  const [cardYear, setCardYear] = useState("0");
  const [cvv, setCvv] = useState("000");
  const [cardNumError, setCardNumError] = useState(false)
  const [isComplete, setIsComplete]= useState(false)
  const isZero = cardNumber === '0' || ''
  const isError = name === ''


  const handleCardDisplay = () => {
    const rawText = [...cardNumber.split(' ').join('')] // Remove old space
    const creditCard = [] // Create card as array
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(' ') // Add space
        creditCard.push(t)
    })
    return creditCard.join('') // Transform card array to string
}

  return (
    <Flex h="100vh" direction={{sm:"column",lg:"row"}}> 
      <Head>
        <title>Interactive card details form</title>
        <meta name="description" content="Alvin Rumbaoa | Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex  w={{sm:"100%",lg:'700px'}} h={{sm:"30%",lg:"100%"}} bgColor="#21092F">
        <Image src="/images/Group 10.png"  w="683px"></Image>
      </Flex>

      <Box w={{sm:'450px',lg:'500px'}} h={{sm:"250px", lg:"300px"}}  boxShadow='xl' ml={{sm:200, lg:350}} mt={{sm:20, lg:500}} pos="absolute" borderRadius="10px" bgColor="#D2D3D9">
        <Box mt={10} bgColor="#2F2F2F" w="100%" h="50px" />

        <Box h="45px" bgColor="#ADB5BE" rounded="sm"  m={10}   >
          <Text textAlign="right" p={2} color="white" fontSize="md"  fontWeight="500">{cvv}</Text>
        </Box>
    
      </Box>
      <Box w={{sm:'450px',lg:'500px'}} h={{sm:"250px", lg:"300px"}} boxShadow='xl' p='6' rounded='md'  ml={{sm:10,lg:250}} mt={{sm:290,lg:100}} pos={{sm:"absolute" ,lg:"absolute" }} backgroundImage="url('/images/Oval Copy 2.png')" backgroundRepeat="no-repeat">
        <Flex direction="row"> 
         <Box m="20px"bgColor="#DEDDDF" w="40px" h="40px" borderRadius="50%"/>
         <Box mt="27px" border=" 2px solid #DEDDDF" w="20px" h="20px" borderRadius="50%"/>
        </Flex>
         
      
        <Text pl={5}  mt={6} color="white" fontSize={{sm:"lg",lg:"4xl"}} fontWeight="500">{isZero? setCardNumber("0000 0000 0000 0000") : cardNumber}</Text>
         <Flex direction="row" justify="space-between"> 
          <Text p={5}  mt={5}color="white" fontSize="md" fontWeight="500">{isError? setName("MARY TESS"): name}</Text>
          <Text p={5}  mt={5}color="white" fontSize="md" fontWeight="500">{cardMonth}/{cardYear}</Text>
         </Flex>
        
        
      </Box>
     

      <Flex d="flex" direction="column" justify="center" m={{sm: 200, lg: 500}} >
      <FormControl isInvalid={isError}>
        {/* name */}
      <FormLabel>CardHolder's Name</FormLabel>
        <Input
          w="22em"
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='e.g. Mary Tess' 
        />
        {!isError ? (
          <FormHelperText>
            Enter your name
          </FormHelperText>
        ) : (
          <FormErrorMessage>Name is Required</FormErrorMessage>
        )}
        {/* cardnumber */}
         <FormLabel>CardHolder's Number</FormLabel>
        <Input
          maxLength={20}
          type='text'
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder='e.g. 1234 5678 9123 0000' 
          value={handleCardDisplay()}
        />

        {!isError ? (
          <FormHelperText>
            Enter your CardHolder's number'
          </FormHelperText>
        ) : (
          <FormErrorMessage>Wrong format, numbers only</FormErrorMessage>
        )}
         <FormLabel>Exp. Date (MM/YY)CVC</FormLabel>
         <Box d="flex" justifuy="space-between" direction='row'>
         <Input m={2} w={20}
          type='text'
          maxLength={2}
          onChange={(e) => setCardMonth(e.target.value)}
          placeholder='MM' 
        />
         <Input m={2} w={20}
          type='text'
          maxLength={2}
          onChange={(e) => setCardYear(e.target.value)}
          placeholder='YY' 
        />
    
         <Input m={2} w={100}
          type='text'
          maxLength={3}
          onChange={(e) => setCvv(e.target.value)}
          placeholder='e.g. 123' 
        />
         </Box>
        
        {!isError ? (
          <FormHelperText>
            Enter Expiration Date( MM/YY ) 
          </FormHelperText>
        ) : (
          <FormErrorMessage>Can’t be blank</FormErrorMessage>
        )}
        
       </FormControl>
       <Button mt={5} p={5} bgColor="#21092F" color="white" >Confirm</Button>
      </Flex>

      
     
    </Flex>
  )
}
