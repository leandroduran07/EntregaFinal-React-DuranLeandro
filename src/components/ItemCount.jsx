import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

const ItemCount = ({ product }) => {

    const { cart, setCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);


    //funciones para restar y sumar las cantidades
    const restar = () => {
        return quantity > 1 && setQuantity(quantity - 1);
    }

    const sumar = () => {
        return quantity < product.stock && setQuantity(quantity + 1);
    }

    //función para agregar al carrito


    const addCart = () => {
        const addItem = { ...product, cantidad: quantity };
        const copyCart = [...cart];
        const search = copyCart.find((prod) => prod.id === addItem.id);

        if (search) {
            const updatedCart = copyCart.map((prod) =>
                prod.id === addItem.id ? { ...prod, cantidad: prod.cantidad + quantity } : prod
            );
            setCart(updatedCart);
        } else {
            copyCart.push(addItem);
            setCart(copyCart);
        }
    };





    return (
        <div className='item-display'>
            <div className="item-count">
                <button onClick={restar}>-</button>
                <p>{quantity}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={addCart} className='add-cart'>Agregar al carrito</button>
            </div>
        </div>

    )
}

export default ItemCount  