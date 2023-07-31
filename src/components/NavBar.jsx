import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import data from '../data/products.json';
import { NavLink } from 'react-router-dom';

const categories = data.map(product => product.category)
const unique = new Set(categories)

export const NavBar = () => (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <NavLink style={{ textDecoration: 'none' }} to={"/"}>
                        <Navbar.Brand > My Ecommerce </Navbar.Brand>
                    </NavLink>
                </Nav>
                <Nav className="me-auto">
                    {[...unique].map(item => (
                        <NavLink key={item} className={"nav-link"} to={`/category/${item}`}>
                            {item}
                        </NavLink>
                    ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>

    </header>
)