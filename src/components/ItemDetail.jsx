import '../css/detail.css'
import ItemCount from './ItemCount'

export const ItemDetail = ({ product }) => {
    return (
        <div className='cont-detail'>
            <div className='cont-img'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className='cont-text'>
                <div className='detail-brand'>{product.brand}</div>
                <div className='detail-name'>{product.name}</div>
                <div className='detail-price'>${product.price}</div>
                <ItemCount product={product} />
            </div>
            
        </div>
        
    ) 

}

