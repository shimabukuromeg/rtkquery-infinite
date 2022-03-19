import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Image, Box, Flex
} from '@chakra-ui/react'
import { Counter } from '../features/counter/Counter'
import { useListCatsQuery } from '../services/cats'

const Home: NextPage = () => {
  const { data } = useListCatsQuery({ page: 1, limit: 5 });
  console.log('data', data);

  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
      <VStack>
        {
          data?.map((cat, index) => (
            <Flex key={cat?.id} w={400} flexDirection="column" alignItems="center">
              <Text>{`${index + 1} ${cat.id}`}</Text>
              <Image alt={cat?.id} src={cat?.url} width={100} />
            </Flex>
          ))
        }
      </VStack>
    </VStack>
  )
}

export default Home
