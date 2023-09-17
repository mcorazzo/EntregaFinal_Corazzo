import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const [customerData, setCustomerData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const handleInputChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/purchase-summary", { state: { customerData, cart } });
  };

  const handleClearCart = () => {
    clearCart();
    navigate("/");
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const isFormDisabled = cart.length === 0;

  return (
    <div className="cart-container flex">
      <div className="w-1/3 p-8 bg-gray-100 flex justify-center items-top">
      <form className="bg-white p-8 rounded shadow-lg w-96" onSubmit={handleFormSubmit}>
    <h2 className="text-2xl font-bold mb-6">Enviar Pedido</h2>

    <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">Nombre</label>
        <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Juan"
            className="mt-1 p-2 w-full border rounded-md"
            disabled={isFormDisabled}
            onChange={handleInputChange}
            value={customerData.nombre}
            required // Campo obligatorio
        />
    </div>

    <div className="mb-4">
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-600">Apellido</label>
        <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Pérez"
            className="mt-1 p-2 w-full border rounded-md"
            disabled={isFormDisabled}
            onChange={handleInputChange}
            value={customerData.apellido}
            required // Campo obligatorio
        />
    </div>

    <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="juan@example.com"
            className="mt-1 p-2 w-full border rounded-md"
            disabled={isFormDisabled}
            onChange={handleInputChange}
            value={customerData.email}
            required // Campo obligatorio
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" // Validación simple para email
        />
    </div>

    <div className="mb-4">
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-600">Teléfono</label>
        <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="1234-5678"
            className="mt-1 p-2 w-full border rounded-md"
            disabled={isFormDisabled}
            onChange={handleInputChange}
            value={customerData.telefono}
            required // Campo obligatorio
        />
    </div>

    <button
        type="submit"
        className={`w-full p-2 rounded-md text-white ${ isFormDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        disabled={isFormDisabled}
    >
        Enviar Pedido
    </button>
</form>

      </div>

      <div className="w-2/3 p-4">
        {cart.length === 0 ? (
          <div className="text-center p-8 bg-gray-100 flex flex-col justify-center items-center h-full w-full text-gray-600 mb-6 rounded-md shadow-lg w-96">
            <p>No hay ítems en el carrito.</p>
            <Link to="/" className="button mt-8 bg-blue-500 text-white py-1 px-4 rounded">Volver a la tienda</Link>
          </div>
        ) : (
          <div className="bg-gray-100 py-8 px-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white my-2 p-4 shadow-sm border-t-2 border-b-2 border-gray-200 rounded-md flex">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-2">Precio: ${item.price}</p>
                  <p className="text-gray-600 mb-4">Cantidad: {item.quantity}</p>
                  <button onClick={() => removeItem(item.id)} className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition duration-200 ease-in-out">Eliminar</button>
                </div>
                <div className="ml-4">
                  <img src={item.image} alt={item.title} className="h-24 w-24 object-cover rounded-md shadow-lg" />
                </div>
              </div>
            ))}
            <div className="my-4 p-4">
              <h4 className="text-xl font-bold">Total: ${totalPrice}</h4>
            </div>
            <button onClick={handleClearCart} className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition duration-200 ease-in-out mt-4">Vaciar carrito</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
