import axios from 'axios';
import actionTypes from './actionTypes';

export const getProduct = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3005/catalog/${id}`).then((response) => {
      dispatch({
        type: actionTypes.GET_PRODUCT,
        payload: response.data,
      });
    });
  };
};
