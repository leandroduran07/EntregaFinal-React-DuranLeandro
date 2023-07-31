import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemDetail } from '../components/ItemDetail';
import '../css/detail.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const itemId = useParams().id;

    useEffect(() => {
        const productCall = doc(db, "productos", itemId);
        getDoc(productCall)
            .then((resp) => {
                setProduct({ ...resp.data(), id: resp.id });
            })
            .catch((error) => {
                console.error("Error al obtener el documento del producto:", error);
                setProduct(null);
            });
    }, [itemId]);

    return (
        <Container className='mt-4'>
            <h1>Detalle</h1>
            <div className='center-detail'>
                {product === null ? (
                    <div>Producto no encontrado</div>
                ) : product.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <ItemDetail product={product} />
                )}
            </div>
        </Container>
    );
};
