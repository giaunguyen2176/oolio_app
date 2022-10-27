import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../components/cart/slice';
import productReducer from '../components/product/slice';
import discountCodes from '../components/discountCodes/slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    discountCodes: discountCodes
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
