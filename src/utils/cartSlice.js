import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  items: [],
  totalItemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("added item ", action.payload)
    },
    removeItem: (state, action) => {
      console.log("removed item ",  action.payload);
    },
    clearCart: (state, action) => {

      //RTK says either mutate the state or return the new state
      //state.items.length = 0;
      return [];
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

