import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
  name : "ui",
  initialState : {cartIsVisible : false , isLoading : false , fullfilled :false , rejected : false},
  reducers : {
    toggle(state){
      state.cartIsVisible =!state.cartIsVisible;
    },
    setLoading(state,action){
      state.isLoading = action.payload;
    },
    setFullfilled(state,action){
      state.fullfilled = action.payload;
    },
    setRejected(state,action){
      state.rejected = action.payload;
    }
  }
});
export const uiAction = uiSlice.actions;
console.log(typeof uiSlice.reducer);
export default uiSlice.reducer;