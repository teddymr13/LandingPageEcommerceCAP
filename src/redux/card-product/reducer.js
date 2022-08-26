import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_ITEM } from '../card-product/action';



const INITIAL_STATE = {
  data: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state)
      if (state.data.length < 1) {
        return {
          data : [action.value]
        }
      }
      const product = state.data.find(products => products.id === action.value.id)
      console.log(product)
      const products =  !product ? ([...state.data, action.value]) : state.data.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + action.value.quantity } : p));
      return {
        data : products
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        data: state.data.filter(item => item !== action.value)
      };

    case CHANGE_QUANTITY_ITEM:
      return {
        ...state,
        data: state.data.map(content =>
          content.id === action.id
            ? { ...content, quantity: action.value }
            : content
        )
      };

    default:
      return state;
  }
};

export default reducer;