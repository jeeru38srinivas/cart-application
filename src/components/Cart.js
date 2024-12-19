import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div style={{ marginTop: '20px', marginBottom: '40px'}}>
      <h2 className='text-primary'>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - ${item.price}
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Cart;
