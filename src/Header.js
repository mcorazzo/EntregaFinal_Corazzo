import NavBar from "./NavBar"
import CartWidget from "./components/CartWidget"

function Header() {
    return (
        <header id="header" className="header color1 flex justify-between p-5 text-white">
            <h1>Corazzo Cueros</h1>
            <NavBar
                link1="Inicio"
                link2="Tienda"
                link3="Contacto"
            />
            <CartWidget/>
        </header>
    )
}

export default Header