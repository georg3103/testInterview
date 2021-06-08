import { createSlice } from '@reduxjs/toolkit'
import { STATUSES } from '../../utils/constants'

export const slice = createSlice({
  name: 'data',
  initialState: {
    status: STATUSES.idle,
    list: [],
  },
  reducers: {
    setStatusPending: (state) => {
      state.status = STATUSES.pending;
    },
    setStatusFailed: (state) => {
      state.status = STATUSES.failed;
    },
    setStatusSuccess: (state) => {
      state.status = STATUSES.success;
    },
    setData: (state, action) => {
      state.list = action.payload;
    }
  },
})

export const actions = {
  ...slice.actions,
};

export default slice.reducer