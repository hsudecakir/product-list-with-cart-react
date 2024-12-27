import { useState } from "react";
import { products } from "./products.js"

let orders = [];

// export function addToCart(event){
//   const selectedProduct = products.find(x => x.name == event.currentTarget.dataset.name);
//   if(orders.includes(selectedProduct)){
//     selectedProduct.piece++;
//   } else{
//     orders.push(selectedProduct)
//     selectedProduct.piece++;
//   }
  
//   for (const order of orders) {
//     if(order.piece > order.stock){
//       order.piece = order.stock;
//       alert('This product is out of stock.');
//     }
//   }
// }

export default function Cart(){
  // const [orders, setOrders] = useState([]);
  // const [totalPieces, setTotalPieces] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  
  return(
    <>
     {/* {orders.length > 0 ? <Orders /> : <EmptyCart />} */}
     <EmptyCart />
    </>
  )
}

function EmptyCart(){
  return (
    <div className="cart">
      <p className="cart-info">Your Cart (<span id="cartLength">0</span>)</p>
      <div className="empty-cart__wrapper">
        <img src="/images/empty-cart--mobile.svg" />
        <p className="empty-cart-txt">Your added items will appear here</p>
      </div>
    </div>
  )
}

// function Orders(){
//   return(
//     <>
//       <div className="orders">
//         <p className="cart-info">
//           Your Cart (
//           <span id="cartLength">
//             {totalPieces}
//           </span>
//           )
//         </p>
//         <div className="orders-list"></div>
//         <div className="total-price">
//           <p>Order Total</p>
//           <p id="totalPriceTxt">$46.50</p>
//         </div>
//         <div className="carbon-neutral-info">
//           <img src="assets/images/carbon_tree.svg" />
//           <p>
//             This is a <span>carbon-neutral</span> delivery
//           </p>
//         </div>
//         <button id="confirmOrderBtn">Confirm Order</button>
//       </div>
//     </>
//   )
// }

