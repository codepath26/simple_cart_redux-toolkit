import ProductItem from './ProductItem';
import classes from './Products.module.css';
const data = [
  {
    id: 1,
    price: 19.99,
    title: "Product 1",
    description: "Description for Product 1",
  },
  {
    id: 2,
    price: 29.99,
    title: "Product 2",
    description: "Description for Product 2",
  },
  {
    id: 3,
    price: 14.99,
    title: "Product 3",
    description: "Description for Product 3",
  },
  {
    id: 4,
    price: 39.99,
    title: "Product 4",
    description: "Description for Product 4",
  },
  {
    id: 5,
    price: 49.99,
    title: "Product 5",
    description: "Description for Product 5",
  },
  {
    id: 6,
    price: 24.99,
    title: "Product 6",
    description: "Description for Product 6",
  },
  {
    id: 7,
    price: 34.99,
    title: "Product 7",
    description: "Description for Product 7",
  },
  {
    id: 8,
    price: 15.99,
    title: "Product 8",
    description: "Description for Product 8",
  },
  {
    id: 9,
    price: 59.99,
    title: "Product 9",
    description: "Description for Product 9",
  },
  {
    id: 10,
    price: 44.99,
    title: "Product 10",
    description: "Description for Product 10",
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{
        data.map((product)=>(
          <ProductItem
          key={product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          />
        ))
        }
      </ul>
    </section>
  );
};

export default Products;
