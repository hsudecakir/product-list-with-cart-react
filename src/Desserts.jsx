import { products } from './products.js';
import { addToCart } from './Cart.jsx'

export default function Desserts(){
  return (
    <div className="container__wrapper">
      <h1>Desserts</h1>
      <div className="products-grid-container">
        {products.map(product =>
        <ProductItem 
        key={product.id}
        category={product.category}
        name={product.name}
        price={product.price}
        piece={product.piece}
        image={product.image} />)}
      </div>
    </div>
  )
}

function ProductItem({ category, name, price, image }){
  return (
    <div className="products-grid-item">
      <div className="product-image">
        <img
          className="mobile--image"
          src={`assets/images/${image}--mobile.svg`}
          alt={category}
        />
        <img
          className="tablet--image"
          src={`public/images/${image}--tablet.svg`}
          alt={category}
        />
        <button className="add-to-cart-btn" data-name={name} onClick={addToCart}>
          <img data-name={name} src="public/images/cart-icon.svg" alt="Cart Icon" />
          <p data-name={name} >Add to Cart</p>
        </button>
      </div>
      <p className="category">
        {category}
      </p>
      <p className="name">
        {name}
      </p>
      <p className="price">
        ${price.toFixed(2)}
      </p>
    </div>
  )
};