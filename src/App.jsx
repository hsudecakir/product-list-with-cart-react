import Desserts from './components/Desserts.jsx';
import Cart from './components/Cart.jsx'
import './app.css'
import { useState } from 'react';

function App() {
  const [orders, setOrders] = useState([]);
  const [totalPieces, setTotalPieces] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className='container'>
      <Desserts orders={orders} setOrders={setOrders} totalPieces={totalPieces} setTotalPieces={setTotalPieces} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      <Cart orders={orders} totalPieces={totalPieces} totalPrice={totalPrice} />
    </div>
  )
}

export default App