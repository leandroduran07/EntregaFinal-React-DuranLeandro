import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/products.json';
import { ItemDetail } from '../components/ItemDetail';
import '../css/detail.css';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const itemId = useParams().id;

    const itemPorId = (id) => {
        return new Promise((resolve, reject) => {
            const item = data.find((prod) => prod.id === id)
            if (item) {
                setTimeout(()=>{
                    resolve(item)
                },2000)
                
            } else{
                reject("No se encontró el producto seleccionado.")
            }
        })
    }

    useEffect(()=>{
        itemPorId(Number(itemId))
        .then((resp)=>{
            setProduct(resp);
        })
    }, [itemId])




    return (
        <Container className='mt-4'>
            <h1>Detalle</h1>
            <div className='center-detail'>
                {product.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <ItemDetail product={product} />
                )}
            </div>

        </Container>
    )
}