import React from 'react'
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Button, VStack } from '@chakra-ui/react'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <VStack>
        <Button
          variant="outline"
          bg="blue.100"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          variant="outline"
          bg="blue.100"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </VStack>
    </div>
  )
}