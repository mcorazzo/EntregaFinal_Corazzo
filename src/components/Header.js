import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../assets/image/logo.png";
import clean from "../assets/image/clean.png";

function Header() {
    return (
        <header id="header" className="header color1 flex justify-between p-5 text-white items-center">
            <Link to="/" className="flex items-center"> {/* Añadir "flex" aquí */}
                <img src={logo} width="50" height="50" className="w-15 mr-2" title="logo" alt="logo" /> {/* Agregado "mr-2" para un pequeño espacio entre las imágenes */}
                <img src={clean} width="150" className="w-15" title="logo" alt="logo" />
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header
