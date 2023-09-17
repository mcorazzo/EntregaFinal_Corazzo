import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CartContext from './CartContext'; // Asegúrate de poner la ruta correcta a tu archivo CartContext

function PurchaseSummary() {
  const location = useLocation();
  const { customerData, cart } = location.state;
  const { clearCart } = useContext(CartContext); // Desestructura clearCart desde el contexto

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 transform transition-transform duration-500 hover:scale-110">
        Gracias por tu compra!
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-2/3 mb-6">
        <p className="mb-2">Nombre: <span className="font-semibold">{customerData.nombre}</span></p>
        <p className="mb-2">Apellido: <span className="font-semibold">{customerData.apellido}</span></p>
        <p className="mb-2">Email: <span className="font-semibold">{customerData.email}</span></p>
        <p className="mb-2">Teléfono: <span className="font-semibold">{customerData.telefono}</span></p>
      </div>
      <h3 className="text-xl font-bold my-4 text-blue-500 transform transition-transform duration-500 hover:scale-110">
        Resumen de compra:
      </h3>
      <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-2/3 mb-6">
        <p className="mb-2">Total: <span className="font-bold">${totalPrice}</span></p>
      </div>
      <Link 
        to="/" 
        onClick={clearCart} // Llama a clearCart cuando se hace clic en el enlace
        className="button mt-8 bg-blue-500 text-white py-1 px-4 rounded transform transition-transform duration-500 hover:scale-110"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}

export default PurchaseSummary;
