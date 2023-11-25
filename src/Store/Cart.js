import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalQuantity : 0,
  totalAmount : 0,
};

const cartSlice = createSlice({
  name: "cartitmes",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push(newItem);
      }
    },
    removeToCart(state ,action){
      const id = action.payload;
      state.totalQuantity--;
      console.log(id);
      const existingItem = state.items.find((item)=>item.id === id);
      console.log(existingItem ,"removeItem")
      if(existingItem.quantity === 1){
        state.items = state.items.filter((item)=>item.id !== id);
      }else{
       existingItem.quantity--;
      }
    }
  },
});
export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
