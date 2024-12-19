import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div class="col-6 col-sm-6 col-md-3" style={{'paddingBottom':'20px'}}>
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default Product;
