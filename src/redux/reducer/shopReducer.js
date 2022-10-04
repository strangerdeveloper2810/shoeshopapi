import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  cart: [],

  dataProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
  ],
};

const shopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {
    getAllProductApiAction: (state, action) => {
      const { payload } = action;
      state.dataProduct = payload;
    },

    addToCartAction: (state, action) => {
      const itemCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    deleteCartItemAction: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      Swal.fire({
        icon: "success",
        title: "success",
        text: "Delete Item Success!",
      });
    },
    
    upAndDownItemAction: (state, action) => {
      const { id, quantity } = action.payload;
      const itemCart = state.cart.find((item) => item.id === id);
      if (itemCart) {
        itemCart.quantity += quantity;
      }
      if (itemCart.quantity < 1) {
        if (window.confirm("Do you want to delete it ???")) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          itemCart.quantity -= quantity;
        }
      }
    },
  },
});

export const {
  getAllProductApiAction,
  addToCartAction,
  deleteCartItemAction,
  upAndDownItemAction,
} = shopReducer.actions;

export default shopReducer.reducer;

// --------------- action thunk ---------------------

export const getAllProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      const action = getAllProductApiAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
