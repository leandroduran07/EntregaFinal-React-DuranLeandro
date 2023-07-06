import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/products.json';
import { ItemList } from '../components/ItemList';
import '../css/card.css'

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        promesa.then(result => {
            if (id) {
                setProducts(result.filter(products => products.category === id))
            } else {
                setProducts(result)

            }
        })

    }, [id])

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <div className='Card-List'>
                {products.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    <ItemList  products={products} />
                )}
            </div>

        </Container>
    )
}