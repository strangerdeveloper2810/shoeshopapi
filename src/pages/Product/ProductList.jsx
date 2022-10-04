import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductApi } from "../../redux/reducer/shopReducer";

export default function ProductList(props) {
 
  const { dataProduct } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  useEffect(()=> {
    const actionThunk = getAllProductApi();
    dispatch(actionThunk);
  },[]);
  const renderProductItem = () => {
    return dataProduct.map((product, index) => (
      <div className="col-4 mt-3" key={index}>
        <ProductItem product={product} />
      </div>
    ));
  };
  return (
    <div className="container">
      <h3 className="text-danger">Product List</h3>
      <div className="row">
        {renderProductItem()}
      </div>
    </div>
  );
}
