import { createContext, useEffect, useState } from "react";



export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    const cartCount = () => {
        return cart.reduce((acc, product) => acc + (product.cantidad || 0), 0);
    };

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc + (product.price || 0) * (product.cantidad || 0), 0);
    };

    const cleanCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



    return (
        <CartContext.Provider value={{ cart, setCart, cartCount, totalPrice, cleanCart }}>
            {children}
        </CartContext.Provider>

    )
}






