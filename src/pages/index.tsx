import type { NextPage } from 'next'
import {
  VStack, Text, Heading,
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
    </VStack>
  )
}

export default Home
