import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { db } from "../db/firebase";
import { collection, getDoc, doc } from "firebase/firestore";
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
    const productCollection = collection(db, "products");
    const docReference = doc(productCollection, params.id);
    const consultation = getDoc(docReference);

    toast.promise(consultation, {
      loading: "Cargando...",
      success: (result) => {
        const productData = result.data();
        setProduct(productData);
        return "Producto cargado con éxito.";
      },
      error: (error) => {
        console.log(error);
        return "Algo salió mal";
      },
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
