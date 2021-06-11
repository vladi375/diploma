import actionTypes from './../actions/actionTypes';

const initialState = {
  product: null,
  error: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.GET_PRODUCT) {
    return {
      ...state,
      product: action.payload,
    };
  }
  if (action.type === actionTypes.ERROR_GETTING_PRODUCT) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};

export default reducer;
