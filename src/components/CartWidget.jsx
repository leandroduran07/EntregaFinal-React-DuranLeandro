import cart from "../img/cart.png";

const styles = {
    img: {
        height: "3rem",
        width: "auto"
    },
    span:{
        color: "white",
        paddingLeft: "10px"
    }
}

export const CartWidget = () =>(
<>
<img src={cart} style={styles.img} alt="carroCompras" /> <span style={styles.span}> 0 </span>
</>
)