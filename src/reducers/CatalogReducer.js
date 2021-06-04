import actionTypes from './../actions/actionTypes';

const initialState = {
  catalog: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.GET_CATALOG) {
    return {
      ...state,
      catalog: action.payload,
    };
  }

  if (action.type === actionTypes.ADD_TO_CART) {
    const item = state.catalog.find(
      (product) => product.id === action.payload.id
    );

    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...item, quantity: 1 }],
    };
  }
  if (action.type === actionTypes.REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
};

export default reducer;
