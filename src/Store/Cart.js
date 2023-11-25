import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getData = createAsyncThunk('getData' , async()=>{

    try{
      const response = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}products.json`);
      console.log(response.data.items);
        return response.data.items;
    }catch(err){

       console.log(err);
       return "error";
    }
})

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
      console.log(state.totalQuantity)
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
  extraReducers : (builder)=>{
    builder.addCase(getData.fulfilled , (state,action)=>{
      console.log("payload " , action.payload);
          state.items = action.payload;
          console.log(state.items ,"thisi s the items")
    })
    builder.addCase(getData.rejected, (state,action)=>{
      console.log(action.payload);

    })
  }
});
export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
