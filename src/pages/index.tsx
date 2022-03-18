import type { NextPage } from 'next'
import {
  VStack, Text, Heading,
} from '@chakra-ui/react'
import { Counter } from '../features/counter/Counter'

const Home: NextPage = () => {
  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
      <Counter />
    </VStack>
  )
}

export default Home
