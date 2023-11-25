  import { useDispatch, useSelector } from "react-redux";
  import Cart from "./components/Cart/Cart";
  import Layout from "./components/Layout/Layout";
  import Products from "./components/Shop/Products";
import { useEffect } from "react";
import axios from "axios";
import { uiAction } from "./Store/Ui";
import Notificationl from "./components/Notification/Notificationl";

  function App() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
    const  cart = useSelector(state =>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
      setTimeout(() => {
        dispatch(uiAction.setRejected(false));
        dispatch(uiAction.setLoading(false));
        dispatch(uiAction.setFullfilled(false));
      }, 4000);
      const sendData =async(cart)=>{
        try{
          dispatch(uiAction.setLoading(true));
          const response = await axios.put(`${process.env.REACT_APP_FIREBASE_URL}products.json`,cart);
          dispatch(uiAction.setLoading(false));
          console.log(response);
          dispatch(uiAction.setFullfilled(true));
        }catch(err){
          dispatch(uiAction.setRejected(true));
          dispatch(uiAction.setLoading(false));
          dispatch(uiAction.setFullfilled(false));
          console.log(err);
        }
      }
      sendData(cart);
      
    },[cart ,dispatch])
    return (
      <Layout>
        <Notificationl/>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    );
  }

  export default App;
