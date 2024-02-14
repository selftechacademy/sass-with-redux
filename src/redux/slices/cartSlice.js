import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummyData";

const initialState = {
  allItems: products,
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    emptyCart: (state) => {},
  },
});
//we use inside our components
export const { addItem, removeItem, emptyCart } = cartSlice.actions;

//we use inside our store
export default cartSlice.reducer;
