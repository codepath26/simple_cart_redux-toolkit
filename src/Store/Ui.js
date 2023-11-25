import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
  name : "ui",
  initialState : {cartIsVisible : false},
  reducers : {
    toggle(state){
      state.cartIsVisible =!state.cartIsVisible;
    }
  }
});
export const uiAction = uiSlice.actions;
console.log(typeof uiSlice.reducer);
export default uiSlice.reducer;