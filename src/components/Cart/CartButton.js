import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../Store/Ui';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const  cartQuantity = useSelector(state => state.cart.totalQuantity)
    const onToggleCart = ()=>{
     dispatch(uiAction.toggle());
    }
  return (
    <button onClick={onToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
