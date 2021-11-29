import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'


export const NavBar = () => {

    return (
        <header className="navbar px-5">
            <Link to="/"><h1>Coder RJ</h1></Link>
            
            <nav>
                <ul>
                    <li><Link to="/category/zapatillas">Zapatillas</Link></li>
                    <li><Link to="/category/buzos">Buzos</Link></li>
                    <li><Link to="/category/remeras">Remeras</Link></li>
                </ul>
            </nav>

            <Link to="/cart"><CartWidget /></Link>
        </header>
    )
}


// export default NavBar