import NavLinks from "./NavLinks"
import CartWidget from "./components/CartWidget"

function Header() {
    return (
        <header id="header" className="header flex justify-between py-4 px-2 text-white">
            <h1>Corazzo Cueros</h1>
            <NavLinks
                link1="Inicio"
                link2="Tienda"
                link3="Contacto"
            />
            <CartWidget/>
        </header>
    )
}

export default Header