import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Count = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
        <button type="button" class="btn btn-primary position-relative">
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
      </div>
  );
};

export default Count;
