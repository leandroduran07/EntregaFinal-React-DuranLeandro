import cart from "../img/cart.png";
import '../css/cartWidget.css'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";



const CartWidget = () =>{

    const {cartCount} = useContext(CartContext);

    return(
        <>
            <Link className="cart-deco" to="/cart"><img className='cart-img' src={cart} alt='carroCompras' /> <span className='cart-span'> {cartCount()} </span></Link>
        </>
    )

}




export default CartWidget;