// action in application
const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        cart: state.cart.filter((element) => {
          return element.id !== action.payload;
        }),
        total: 0,
        amount: 0,
      };

    case "TOGGLE_QUANTITY":
      let newCart = state.cart.map((element) => {
        if (element.id === action.payload.id) {
          if (action.payload.type === "increment") {
            return {
              ...element,
              quantity:
                element.quantity < 5 ? element.quantity + 1 : element.quantity,
            };
          } else if (action.payload.type === "decrement") {
            return {
              ...element,
              quantity:
                element.quantity > 0 ? element.quantity - 1 : element.quantity,
            };
          }
        }
        return element;
      });
      return {
        ...state,
        cart: newCart,
      };
    case "CALCULATE_TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartTotal, element) => {
          const { price, quantity } = element;
          cartTotal.total += price * quantity;
          cartTotal.amount += quantity;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total,
        amount,
      };
    default:
      return state;
  }
};

export default reducer;
