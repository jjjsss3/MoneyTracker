import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
import generalReducer from './generalSlice';

export default configureStore({
   reducer: {
      account: accountReducer,
      general: generalReducer,
   },
});
