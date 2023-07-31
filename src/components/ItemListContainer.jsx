import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ItemList } from '../components/ItemList';
import '../css/card.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const productsCall = collection(db, "productos");
        getDocs(productsCall)
            .then((resp) => {
                const allProducts = resp.docs.map((prod) => {
                    return { ...prod.data(), id: prod.id };
                });

                if (id) {
                    // Si hay una categoría seleccionada, filtramos los productos
                    const filteredProducts = allProducts.filter(product => product.category === id);
                    setProducts(filteredProducts);
                } else {
                    // Si no hay categoría seleccionada, mostramos todos los productos
                    setProducts(allProducts);
                }
            });
    }, [id]);

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <div className='Card-List'>
                {products.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <ItemList products={products} />
                )}
            </div>

        </Container>
    )
}