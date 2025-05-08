// CartContext.js
import { createContext, useState ,useEffect } from "react";

// Create context
export const CartContext = createContext(); // ✅ Use PascalCase

// Create provider component
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

function handleSubmit(product) {
    //check whether product exists
    // if does, update quantity
    // if not, add it to cart
   {console.log("current product", product)}
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
}
   // ✅ useEffect to log cart whenever it changes
   useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);


  return (
    <CartContext.Provider value={{ cart, setCart, handleSubmit }}>
      {children}
    </CartContext.Provider>
  );
}

export  default CartProvider;
