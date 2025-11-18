import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";
interface initialState {
  cart: ProductType[];
  favourite: ProductType[];
  userInfo: any;
}
const initialState: initialState = {
  cart: [],
  favourite: [],
  userInfo: null,
};
export const counterSlice = createSlice({
  name: "counter  ",
  initialState,

  reducers: {
    addToCart(state, action) {
      const existingProduct = state.cart.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
