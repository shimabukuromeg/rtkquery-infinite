import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CurrentPageScrollState {
  value: number
}

const initialState: CurrentPageScrollState = {
  value: 1,
}

export const currentPageScrollSlice = createSlice({
  name: 'currentPageScroll',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = currentPageScrollSlice.actions

export default currentPageScrollSlice.reducer