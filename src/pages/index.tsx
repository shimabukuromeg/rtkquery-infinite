import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Image, Flex, Button, HStack, Link
} from '@chakra-ui/react'
import { useListCatsQuery, infinite } from '../services/cats'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/currentPage/currentPageSlice';
import { RootState } from '../store';
import NextLink from 'next/link';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPage.value)
  useListCatsQuery({ page: currentPage })
  useListCatsQuery({ page: currentPage + 1 })
  const result = infinite(currentPage)

  return (
    <VStack p={4}>
      <Heading>無限ローディング実装サンプル</Heading>
      <Text fontSize='3xl'>{`現在のページ：${currentPage}`}</Text>
      <NextLink href='/hello-world' passHref>
        <Link>サンプルページへ</Link>
      </NextLink>
      <VStack>
        {
          result?.map((cat, index) => (
            <Flex key={cat?.id} w={400} flexDirection="column" alignItems="center">
              <Text>{`${index + 1}: ${cat?.id}`}</Text>
              <Image alt={cat?.id} src={cat?.url} width={400} />
            </Flex>
          ))
        }
        <HStack spacing={8} pt={4}>
          <Button onClick={() => {
            if (currentPage > 1) {
              dispatch(decrement())
            }
          }} colorScheme='teal' size='lg' disabled={currentPage <= 1}>
            Load Less
          </Button>
          <Button onClick={() => {
            dispatch(increment())
          }}
            colorScheme='teal' size='lg'
          >Load More</Button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Home
