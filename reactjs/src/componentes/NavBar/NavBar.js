import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <header className= "navbar">
            <h1>Coder RJ</h1>
            <nav>
                <ul>
                    <li>Enlace</li>
                    <li>Enlace</li>
                    <li>Enlace</li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}