export default function Cart(){
  return(
    <div className="cart">
      <p className="cart-info">Your Cart (<span id="cartLength">0</span>)</p>
      <div className="empty-cart__wrapper">
        <img src="public/images/empty-cart--mobile.svg" />
        <p className="empty-cart-txt">Your added items will appear here</p>
      </div>
    </div>
  )
}
