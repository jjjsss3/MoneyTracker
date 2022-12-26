import { createSlice } from '@reduxjs/toolkit';
import currencies from '~/constants/currencies';

export const generalSlice = createSlice({
   name: 'general',
   initialState: {
      typeFilter: 'WEEK',
      dataFilter: {
         labels: ['Tuần trước', 'Tuần này'],
         datasets: [
            {
               data: [40, 84.5],
               // colors: [
               //    (opacity = 1) => `#BE95FF`,
               //    (opacity = 1) => `#78A9FF`,
               // ],
            },
         ],
      },
      language: 'vi',
      currency: currencies.vnd,
      hiddenBalance: false,
      showAddTransactions: false,
   },
   reducers: {
      updateTypeFilter: (state, action) => {
         state.typeFilter = action.payload.typeFilter;
      },
      updateLanguage: (state, action) => {
         state.language = action.payload.language;
      },
      updateDataFilter: (state, action) => {
         state.dataFilter = action.payload.data;
      },
      hideBalance: (state, action) => {
         state.hiddenBalance = action.payload.hiddenBalance;
      },
      updateShowAddTransactions: (state, action) => {
         state.showAddTransactions = action.payload.show;
      },
   },
});
export const { updateTypeFilter, updateLanguage, updateDataFilter, hideBalance, updateShowAddTransactions } =
   generalSlice.actions;
export default generalSlice.reducer;
