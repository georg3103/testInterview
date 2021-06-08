import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'data',
  initialState: {
    list: [],
  },
  reducers: {
    setData: (state, action) => {
      state.list = action.payload
    }
  },
})

export const actions = {
  ...slice.actions,
};

export default slice.reducer