import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItemAction, upAndDownItemAction } from "../../redux/reducer/shopReducer";
export default function Carts(props) {
  const { cart } = useSelector((state) => state.shopReducer);

  const dispatch = useDispatch();

  const renderCartItem = () => {
    return cart.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <img src={item.image} alt={item.name} width={50} />
        </td>
        <td>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              const itemQuantity = {
                id: item.id,
                quantity: 1,
              };
              const action = upAndDownItemAction(itemQuantity);
              dispatch(action)
            }}
          >
            +
          </button>

          {item.quantity}

          <button
            className="btn btn-outline-danger"
            onClick={() => {
              const itemQuantity = {
                id: item.id,
                quantity: -1,
              };
              const action = upAndDownItemAction(itemQuantity);
              dispatch(action)
            }}
          >
            -
          </button>
        </td>
        <td>{item.price.toLocaleString()} $</td>
        <td>{(item.quantity * item.price).toLocaleString()} $</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            Del
          </button>
        </td>
      </tr>
    ));
  };

  const deleteItem = (id) => {
    const action = deleteCartItemAction(id);
    dispatch(action);
  };
  return (
    <div className="container mt-3">
      <h3 className="text-warning">Carts</h3>
      <div className="table-responsive text-center">
        <table className="table table-primary">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderCartItem()}</tbody>
        </table>
      </div>
    </div>
  );
}
