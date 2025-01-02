export default function Cart({ orders, totalPieces, totalPrice }){
  return(
    <>
     {orders.length > 0 ? <Orders orders={orders} totalPieces={totalPieces} totalPrice={totalPrice} /> : <EmptyCart />}
    </>
  )
}

function EmptyCart(){
  return (
    <div className="cart">
      <p className="cart-info">Your Cart (<span id="cartLength">0</span>)</p>
      <div className="empty-cart__wrapper">
        <img src="./images/empty-cart--mobile.svg" />
        <p className="empty-cart-txt">Your added items will appear here</p>
      </div>
    </div>
  )
}

function Orders({ orders, totalPieces, totalPrice }){
  return(
    <>
      <div className="orders">
        <p className="cart-info">
          Your Cart (
          <span id="cartLength">
            {totalPieces}
          </span>
          )
        </p>
        <div className="orders-list">
          {orders.map(order => (
            <div className="order" key={order.id}>
              <div className="order__wrapper">
                <p className="order-name">{order.name}</p>
                <span className="order-piece">x{order.piece}</span>
                <span className="order-price">@ ${(order.price).toFixed(2)}</span>
                <span className="order-total-price">${((order.price) * (order.piece)).toFixed(2)}</span>
              </div>
              <i className="delete-icon fa-regular fa-circle-xmark"></i>
            </div>
          ))}
        </div>
        <div className="total-price">
          <p>Order Total</p>
          <p id="totalPriceTxt">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="carbon-neutral-info">
          <img src="./images/carbon_tree.svg" />
          <p>
            This is a <span>carbon-neutral</span> delivery
          </p>
        </div>
        <button id="confirmOrderBtn">Confirm Order</button>
      </div>
    </>
  )
}

