import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <NavLink to="/carrito">
      <div className="divcart">
        <i className="material-icons">shopping_cart</i>
        <span className="circle">3</span>
      </div>
    </NavLink>
  );
}

export default CartWidget;
