import cart from "../img/cart.png";
import '../css/cartWidget.css'



export const CartWidget = () =>(
<>
<img className='cart-img' src={cart} alt='carroCompras' /> <span className='cart-span'> 0 </span>
</>
)