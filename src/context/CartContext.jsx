// React Context API used for global state
import { createContext, useContext, useState } from "react";

// Creates a CartContext shared across the app
const CartContext = createContext();

// Provide component that surronds the app
export function CartProvider({ children }) {
  // State that keeps all the cats in the cart
  const [cart, setCart] = useState([]);

  // Add cat to cart (if not already in cart)
  function addToCart(cat) {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === cat.id);
      if (exists) return prev;
      return [...prev, cat];
    });
  }

  // Remove a cat from the cart based on id
  function removeFromCart(id) {
    setCart((prev) => prev.filter((cat) => cat.id !== id));
  }

  // Empty out the cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to easily use cart in components
export function useCart() {
  return useContext(CartContext);
}