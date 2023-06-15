import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"

export default function app(){
    return( 
    <>
        <NavBar />
        <ItemListContainer greeting = "Mis Productos"/>
    </>
    )
}