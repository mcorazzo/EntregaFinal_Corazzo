import { Link } from "react-router-dom"
import NavBar from "./NavBar"


function Header() {
    return (
        <header id="header" className="header color1 flex justify-between p-5 text-white">
            <Link to="/">
                <h1>Logo Tienda</h1>
            </Link>
            <NavBar/>            
        </header>
    )
}

export default Header