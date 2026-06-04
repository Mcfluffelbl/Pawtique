import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(cat) {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === cat.id);
      if (exists) return prev;
      return [...prev, cat];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((cat) => cat.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}