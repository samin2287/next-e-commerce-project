import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";
interface initialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}
const initialState: initialState = {
  cart: [],
  favorite: [],
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
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const prod = state.cart.find((item) => item.id === action.payload);
      if (prod) prod.quantity = (prod.quantity || 0) + 1;
    },
    decreaseQuantity(state, action) {
      const prod = state.cart.find((item) => item.id === action.payload);
      if (prod) {
        prod.quantity = (prod.quantity || 1) - 1;
        if (prod.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    toggleFavorite(state, action) {
      const exists = state.favorite.find(
        (item) => item?.id === action.payload?.id
      );
      if (exists) {
        state.favorite = state.favorite.filter(
          (item) => item.id !== action.payload?.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    removeFromFavorite(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleFavorite,
  removeFromFavorite,
} = counterSlice.actions;

export default counterSlice.reducer;
