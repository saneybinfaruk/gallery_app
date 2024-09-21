import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemQueryType} from '../interfaces/interfaces';
import { initialItemsNum } from '../constants/datas';

interface ItemQueryState {
  _page: number;
  _limit: number;
}

const initialState: ItemQueryState = {
  _page: 1,
  _limit: initialItemsNum,
};
const ItemQuery = createSlice({
  name: 'ItemQuery',
  initialState,
  reducers: {
    setPageNumber(state, action: PayloadAction<number>) {
      state._page += action.payload;
    },

    resetQuery(state) {
      Object.assign(state, initialState);
    },
  },
});
export const {setPageNumber, resetQuery} = ItemQuery.actions;
export default ItemQuery.reducer;
