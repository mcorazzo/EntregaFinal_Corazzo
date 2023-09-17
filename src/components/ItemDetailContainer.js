import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { toast } from "sonner";
import ItemDetail from './ItemDetail';
import CartContext from './CartContext';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const params = useParams();

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    // Realizar fetch para obtener datos del producto de Fake Store API
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        return response.json();
      })
      .then(productData => {
        setProduct(productData);
        toast.success("Producto cargado con éxito.");
      })
      .catch(error => {
        console.error("Error al cargar los datos de la API:", error);
        toast.error("Algo salió mal.");
      });
  }, [params.id]);

  const handleCallback = (value) => {  
    setAmount(value);
    if (value > 0) {
      setConfirmed(true);
    } else {
      setConfirmed(false);
    }
  }

  const handleAddToCart = () => {
    if (confirmed && amount > 0) {
      addItemToCart(product, amount);
    }
  }

  return (
    <ItemDetail 
      product={product}
      handleCallback={handleCallback}
      amount={amount}
      confirmed={confirmed}
      handleAddToCart={handleAddToCart}
    />
  );
}

export default ItemDetailContainer;
