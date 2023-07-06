import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../css/card.css'

export const Item = ({ product }) => {
    return (
        <Card  key={product.id} className='Card-style'>
            <Card.Img className='Card-img'   variant="top" src= {product.img} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                <Link to={`/item/${product.id}`}>
                    <Button variant="dark">Ver más</Button>
                </Link>     
            </Card.Body>
        </Card>
    ) 

}
