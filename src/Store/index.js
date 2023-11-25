import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import uiReducer from "./Ui";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});



export default store;
