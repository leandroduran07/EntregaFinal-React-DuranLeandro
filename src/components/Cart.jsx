import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, totalPrice, cleanCart } = useContext(CartContext);

    return (
        <div className='container'>

            <h1>Carrito de Compras</h1>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.brand}</h2>
                        <h3>{prod.name}</h3>
                        <p>Precio Unidad: ${prod.price}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Total: ${prod.price * prod.cantidad}</p>

                    </div>
                )
                )
            }

            {
                cart.length > 0 &&
                <div>
                    <h3>Precio Total: ${totalPrice()}</h3>
                    <button onClick={cleanCart}>Limpiar Carrito</button>
                </div>
                
            }
            

        </div >
    )
}

export default Cart