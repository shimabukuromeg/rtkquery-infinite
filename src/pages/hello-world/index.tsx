import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Link, 
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Home: NextPage = () => {

  return (
    <VStack p={4}>
      <Heading>Hello, World</Heading>
      <VStack>
        <Text>hello, world</Text>
        <NextLink href='/' passHref>
        <Link>トップページへ</Link>
      </NextLink>
      </VStack>
    </VStack>
  )
}

export default Home
