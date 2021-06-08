import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { actions as dataActions } from './slices/dataSlice';

export const actions = {
  ...dataActions,
};

export default configureStore({
  reducer: {
    data: dataReducer
  },
});