import actionTypes from './../actions/actionTypes';

const initialState = {
  phone: '',
  password: '',
  user: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.CHANGE_LOGIN) {
    return {
      ...state,
      phone: action.payload,
    };
  }
  if (action.type === actionTypes.CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === actionTypes.LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload,
      phone: '',
      password: '',
    };
  }
  if (action.type === actionTypes.LOGIN_FAILURE) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default reducer;
