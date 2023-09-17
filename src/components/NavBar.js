import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <nav className="flex gap-4">        
        <NavLink to="/category/electronics">Electrónicos</NavLink>       
        <NavLink to="/category/jewelery">Joyería</NavLink>
        <NavLink to="/category/clothing">Vestimenta</NavLink>
      </nav>
      <CartWidget />
    </> 
  )
}

export default NavBar
