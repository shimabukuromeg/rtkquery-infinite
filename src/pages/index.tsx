import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Image, Flex, Button,
} from '@chakra-ui/react'
import { Counter } from '../features/counter/Counter'
import { useListCatsQuery, infinite } from '../services/cats'
import { useState, useMemo } from 'react'

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  useListCatsQuery({ page: currentPage })
  useListCatsQuery({ page: currentPage +1 })
  const result = infinite(currentPage)
  console.log('result', result);

  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <Text fontSize='xl'>Hello, World</Text>
      <VStack>
        {
          result?.map((cat, index) => (
            <Flex key={cat?.id} w={400} flexDirection="column" alignItems="center">
              <Text>{`${index + 1} ${cat?.id}`}</Text>
              <Image alt={cat?.id} src={cat?.url} width={100} />
            </Flex>
          ))
        }
        <Button onClick={() => {
          setCurrentPage((v) => v + 1)
        }}>もっとみる</Button>
      </VStack>
    </VStack>
  )
}

export default Home
