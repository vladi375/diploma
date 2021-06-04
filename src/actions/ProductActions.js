import axios from 'axios';
import actionTypes from './actionTypes';

export const getProduct = (props) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3005/catalog/${props.match.params.id}`)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_PRODUCT,
          payload: response.data,
        });
      });
  };
};
