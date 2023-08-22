import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <nav className="flex gap-4">        
        <NavLink to="/category/jewelery">Categoria Joyas</NavLink>
        <NavLink to="/category/electronics">Categoria Electronicos</NavLink>       
      </nav>
      <CartWidget />
    </> 
  );
}

export default NavBar;
