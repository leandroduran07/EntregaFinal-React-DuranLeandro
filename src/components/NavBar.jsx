import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [allproducts, setAllProducts] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        const productsCall = collection(db, "productos");
        getDocs(productsCall)
            .then((resp) => {
                setAllProducts(
                    resp.docs.map((prod) => {
                        return { ...prod.data(), id: prod.id }
                    })
                )
            })
    }, []);

    useEffect(() => {
        const categories = allproducts.map(product => product.category);
        const unique = new Set(categories);
        setUniqueCategories([...unique]);
    }, [allproducts]);

    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <NavLink style={{ textDecoration: 'none' }} to={"/"}>
                            <Navbar.Brand > My Ecommerce </Navbar.Brand>
                        </NavLink>
                    </Nav>
                    <Nav className="me-auto">
                        {uniqueCategories.map(item => (
                            <NavLink key={item} className={"nav-link"} to={`/category/${item}`}>
                                {item}
                            </NavLink>
                        ))}
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}
