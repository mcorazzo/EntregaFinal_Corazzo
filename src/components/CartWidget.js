import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from './CartContext';

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <NavLink to="/cart">
      <div className="cart-widget">
        <i className="material-icons">shopping_cart</i>
        {totalItems > 0 && <span className="circle">{totalItems}</span>}
      </div>
    </NavLink>
  );
}

export default CartWidget;