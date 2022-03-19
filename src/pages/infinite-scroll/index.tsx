import type { NextPage } from 'next'
import {
  VStack, Text, Heading, Image, Flex, Button, HStack, Link
} from '@chakra-ui/react'
import { useListCatsLimit3Query, infiniteScroll } from '../../services/cats'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../features/currentPage/currentPageScrollSlice';
import { RootState } from '../../store';
import NextLink from 'next/link';
import { useEffect } from 'react';

// NOTE: 参考
// https://qiita.com/hoto17296/items/be4c1362647dd241905d
function getScrollBottom() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var scrollTop = body.scrollTop || html.scrollTop;
  return html.scrollHeight - html.clientHeight - scrollTop;
}

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPageScroll.value)
  const { isFetching } = useListCatsLimit3Query({ page: currentPage })
  const { isFetching: isNextDataFetching } = useListCatsLimit3Query({ page: currentPage + 1 })
  const result = infiniteScroll(currentPage)

  useEffect(() => {
    let isSend = true;
    const handleScroll = () => {
      if (
        isSend &&
        getScrollBottom() < 10 &&
        result &&
        typeof result[currentPage - 1] !== 'undefined' &&
        !isFetching &&
        !isNextDataFetching
      ) {
        isSend = false;
        dispatch(increment())
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, dispatch, isFetching, isNextDataFetching, result]);

  return (
    <VStack p={4}>
      <Heading>無限ローディング（スクロール）実装サンプル</Heading>
      <Text fontSize='3xl'>{`現在のページ：${currentPage}`}</Text>
      <NextLink href='/' passHref>
        <Link>トップページへ</Link>
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
      </VStack>
    </VStack>
  )
}

export default Home
