import { createContext, useEffect, useState } from "react";



export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([initialCart]);

    const cartCount = () => {
        return cart.reduce((acc, products) => acc + products.cantidad, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, products) => acc + products.price * products.cantidad, 0)
    }

    const cleanCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);



    return (
        <CartContext.Provider value={{ cart, setCart, cartCount, totalPrice, cleanCart }}>
            {children}
        </CartContext.Provider>

    )
}






