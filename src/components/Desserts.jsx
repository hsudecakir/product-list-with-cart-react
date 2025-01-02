import { products } from './products.js';

export default function Desserts({ orders, setOrders, totalPieces, setTotalPieces, totalPrice, setTotalPrice }){
  function addToCart(name){
    const selectedProduct = products.find(x => x.name == name);
    const existingProduct = orders.findIndex(x => x.name == name);
    if(existingProduct > -1){
      const updatedOrders = [...orders];
      updatedOrders[existingProduct].piece += 1;
      setTotalPieces(totalPieces + 1);
      setTotalPrice(totalPrice + updatedOrders[existingProduct].price);
      if(updatedOrders[existingProduct].piece > updatedOrders[existingProduct].stock){
        updatedOrders[existingProduct].piece = updatedOrders[existingProduct].stock;
        setTotalPieces(totalPieces);
        setTotalPrice(totalPrice)
        alert('This product is out of stock.');
      }
      setOrders(updatedOrders)
    } else{
      setOrders([
        ...orders,
        {
          ...selectedProduct,
          piece: 1
        }
      ]);
      setTotalPieces(totalPieces + 1);
      setTotalPrice(totalPrice + selectedProduct.price);
    }
  };

  function deleteProduct(name){
    const selectedProduct = orders.findIndex(x => x.name == name);
    const updatedOrders = [...orders];
    updatedOrders[selectedProduct].piece += -1;
    setTotalPieces(totalPieces - 1);
    setTotalPrice(totalPrice - updatedOrders[selectedProduct].price);
    if(updatedOrders[selectedProduct].piece == 0){
      updatedOrders.splice(selectedProduct, 1);
    }
    setOrders(updatedOrders);
  }

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
        image={product.image}
        addToCart={addToCart}
        deleteProduct={deleteProduct}
        orders={orders} />)}
      </div>
    </div>
  )
}

function ProductItem({ category, name, price, image, addToCart, orders, deleteProduct }){
  const selectedProduct = orders.findIndex(x => x.name == name);

  return (
    <div className="products-grid-item">
      <div className="product-image">
        <img
          className="mobile--image"
          src={`./images/${image}--mobile.svg`}
          alt={category}
        />
        <img
          className="tablet--image"
          src={`./images/${image}--tablet.svg`}
          alt={category}
        />
        {selectedProduct == -1 ? 
        (<button className="add-to-cart-btn" onClick={() => addToCart(name)}>
          <img src="./images/cart-icon.svg" alt="Cart Icon" />
          <p >Add to Cart</p>
        </button>) 
        : 
        (<button className="added-cart-btn"><img onClick={() => deleteProduct(name)} className="minus-icon" src="./images/minus-icon.svg" />{orders[selectedProduct].piece}<img onClick={() => addToCart(name)} className="plus-icon" src="./images/plus-icon.svg" /></button>)}
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