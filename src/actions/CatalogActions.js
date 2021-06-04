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

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: id,
    },
  };
};
