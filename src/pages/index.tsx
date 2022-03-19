import type { NextPage } from 'next'
import {
  VStack, Text, Heading,
} from '@chakra-ui/react'
import { Counter } from '../features/counter/Counter'
import { useListCatsQuery } from '../services/cats'

const Home: NextPage = () => {
  const { data } = useListCatsQuery({ page: 1, limit: 30 });
  console.log('data', data);
  
  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
      <Counter />
    </VStack>
  )
}

export default Home
