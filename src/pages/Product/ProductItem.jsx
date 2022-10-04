import React from "react";
import {useDispatch} from "react-redux";
import { addToCartAction } from "../../redux/reducer/shopReducer";
export default function ProductItem(props) {
  const { product } = props;
  const dispatch = useDispatch();
  return (
    <div className="card text-white " style={{ width: 350, height: 550 }}>
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
        style={{ width: 349, height: 353 }}
      />
      <div className="card-body bg-gradient bg-info">
        <h4 className="card-title">{product.name}</h4>
        <div className="card-text">
          <h3 className="card-text text-sucess">{product.price}$</h3>
          <button className="btn btn-success" onClick={()=>{
            const itemCart = {...product, quantity:1}
            const action = addToCartAction(itemCart);
            dispatch(action);
          }}>
            <i className="fa fa-cart-plus"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
