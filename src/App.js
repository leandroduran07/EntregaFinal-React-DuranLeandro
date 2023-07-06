import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'

export default function app() {
    return (
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
            </Routes>


        </BrowserRouter>
    )
}