import { createSlice } from '@reduxjs/toolkit';
import currencies from '~/constants/currencies';

export const accountSlice = createSlice({
   name: 'account',
   initialState: {
      id: null,
      firstName: 'VyYYYYYYYYYYYYYYYYYYYYY',
      lastName: null,
      dob: null,
      phone: null,
      total: 92342500000,
      currency: currencies.vnd,
      hiddenBalance: false,
   },
   reducers: {
      updateAccount: (state, action) => {
         state.id = action.payload.account.id;
      },
      hideBalance: (state, action) => {
         state.hiddenBalance = action.payload.hiddenBalance;
      },
   },
});
export const { updateAccount, hideBalance } = accountSlice.actions;
export default accountSlice.reducer;
