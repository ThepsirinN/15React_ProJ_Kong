// context api data for application component
import { createContext, useReducer, useContext, useEffect } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
};
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state is date
  // dispatch like a function that manage data
  // reducer is a function that manage data
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleQuantity = (id, type) => {
    dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
  };

  const formatNumber = (num) => {
    const rex = /(\d)(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(rex, "$1,");
  };

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, toggleQuantity, formatNumber }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

export const MyCartContext = () => {
  return useContext(CartContext);
};
