import React, { useEffect, useState } from "react";
import Presentational from "./Presentational";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Usar fetch para cargar datos de la Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos.");
        }
        return response.json();
      })
      .then(allProducts => {
        setData(allProducts);
        toast.success("Se cargaron todos los productos");
      })
      .catch(error => {
        console.error("Hubo un error al cargar los datos de la API: ", error);
        toast.error("Error al cargar los datos.");
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtered = data.filter((item) => item.category === categoryId);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [categoryId, data]);

  return <Presentational data={filteredData} />;
}

export default ItemListContainer;
