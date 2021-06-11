import axios from 'axios';
import actionTypes from './actionTypes';

export const changeLoginActionCreator = (payload) => {
  return {
    type: actionTypes.CHANGE_LOGIN,
    payload,
  };
};

export const changePasswordActionCreator = (payload) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload,
  };
};

export const onSignInActionCreator = (phone, password) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_START,
    });

    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: phone,
        password: password,
      });
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload: err.response.data,
      });
    }
  };
};
