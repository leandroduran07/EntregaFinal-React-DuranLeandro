import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'


function App() {

    

    return (
        <CartProvider>
            <BrowserRouter>

                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={<ItemListContainer greeting='Mis Productos' />}>
                    </Route>
                    <Route
                        path='/category/:id'
                        element={<ItemListContainer greeting='Mis Productos' />}>
                    </Route>
                    <Route
                        path='/item/:id'
                        element={<ItemDetailContainer />}>
                    </Route>
                    <Route
                        path='/cart'
                        element={<Cart />}>
                    </Route>
                </Routes>


            </BrowserRouter>
        </CartProvider>
    )
}

export default App;