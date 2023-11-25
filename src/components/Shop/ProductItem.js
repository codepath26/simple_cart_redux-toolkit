import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../Store/Cart';

const ProductItem = (props) => {
  const { title, price, description ,id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
     dispatch(cartAction.addToCart({
      title,
      id,
      price,
      description,
      quantity :1,
      totalprice : price  
     }))
  }
  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
