import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart.items);
  console.log("cart" , cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{
        cartItems.map(item =>{
          console.log(item)
          return <CartItem
          item={{ id:item.id ,title: item.title, quantity: item.quantity, total: item.totalprice, price: item.price , item:item }}
          />
        })
      }
      </ul>
    </Card>
  );
};

export default Cart;
