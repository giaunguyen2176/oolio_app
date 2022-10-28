import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ICartItem} from '../../models/CartItem';
import {add} from '../../services/CartItemService';

const initialState = {
};

export const addToCartAsync = createAsyncThunk(
  'product/addToCartAsync',
  async (cartItem: ICartItem) => {
    return await add(cartItem.product, cartItem.quantity);
  }
);

export const slice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.cart.data;

export default slice.reducer;
