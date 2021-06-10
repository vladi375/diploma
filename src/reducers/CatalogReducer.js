import actionTypes from './../actions/actionTypes';

const initialState = {
  catalog: [],
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  order: [],
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
      totalQuantity: state.cart.reduce((sum, item) => sum + item.quantity, 1),
      totalPrice: state.cart.reduce(
        (sum, item) => sum + item.quantity * item.price,
        item.price
      ),
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
    const lastItem = state.cart.find((item) =>
      item.quantity === 1 ? true : false
    );
    return {
      ...state,
      totalQuantity: state.totalQuantity - 1,
      totalPrice: state.totalPrice - action.payload.price,
      cart: lastItem
        ? state.cart.filter((item) => item.id !== action.payload.id)
        : state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
    };
  }
  if (action.type === actionTypes.PLACE_ORDER) {
    return {
      ...state,
      order: [
        ...state.order,
        state.cart.map((item) => `Name: ${item.name}`),
        `Quantity: ${state.totalQuantity}`,
        `Price: ${state.totalPrice}`,
      ],
    };
  }

  return state;
};

export default reducer;
