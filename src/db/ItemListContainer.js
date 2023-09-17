import React, { useEffect, useState } from "react";
import Presentational from "./Presentational";
import { useParams } from "react-router-dom";
import { db } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "sonner";

function ItemListContainer() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const { categoryId } = useParams()
  const { result } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, "products")
    const consultation = getDocs(productsCollection)

    toast.promise(consultation, {
      loading: 'Cargando...',
      success: (categoryId) => {
        const aux = categoryId.docs.map((doc) => {
          const product = doc.data()
          product.id = doc.id
          return product
        });
        setData(aux);
        return "Se cargaron todos los productos"
      },
      error: (error) => {
        return "Algo salio mal"
      },
    });
}, [categoryId]);

  useEffect(() => {
    if (categoryId) {
      const filtered = data.filter((item) => item.category === categoryId)
      setFilteredData(filtered)
    } else {
      setFilteredData(data)
    }
  }, [categoryId, data])

  return <Presentational data={filteredData} />
}

export default ItemListContainer;
