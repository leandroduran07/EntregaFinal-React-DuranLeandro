import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> My Ecommerce </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Inicio">Inicio</Nav.Link>
                    <Nav.Link href="#Productos">Productos</Nav.Link>
                    <Nav.Link href="#Contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
        
    </header>
)