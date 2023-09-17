import React from "react";
import ItemCounter from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ product, handleCallback, amount, confirmed, handleAddToCart }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex items-center mx-auto w-4/5  my-8 shadow-md">
      <div className="w-100 h-80 mr-5 border border-gray-300 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="mb-4">Descripcion: {product.description}</p>
        <ItemCounter handleCallback={handleCallback} />
        {confirmed && (
          <Link to="/cart">
                <button
            onClick={handleAddToCart} // Añade esta línea
            className="border p-1 rounded h-12 text-white w-full transition-colors duration-300"
          style={{
            backgroundColor: "#0A5256"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4FA7A0"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#0A5256"}
          >
            {amount === 1
              ? "Agregar al Carrito 1 unidad"
              : `Agregar al Carrito ${amount} de unidades`}
          </button>
              </Link>
          
        )}
      </div>
    </div>
  )
}

export default ItemDetail
