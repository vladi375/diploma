import axios from 'axios';
import actionTypes from './actionTypes';

export const getCatalog = () => {
  return (dispatch) => {
    axios.get('http://localhost:3005/catalog').then((response) => {
      dispatch({
        type: actionTypes.GET_CATALOG,
        payload: response.data,
      });
    });
  };
};

export const addToCart = (id, amount, value) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: id,
      quantity: amount,
      price: value,
    },
  };
};

export const removeFromCart = (id, amount, value) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: id,
      quantity: amount,
      price: value,
    },
  };
};

export const placeOrder = (payload) => {
  return {
    type: actionTypes.PLACE_ORDER,
    payload,
  };
};
