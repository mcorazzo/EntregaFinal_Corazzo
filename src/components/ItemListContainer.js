import React, { useEffect, useState } from "react";
import Presentacional from "./Presentacional";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductos();
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtered = allData.filter((item) => item.category === categoryId);
      setFilteredData(filtered);
    } else {
      setFilteredData(allData);
    }
  }, [categoryId, allData]);

  const getProductos = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllData(json);
        setFilteredData(json);
      });
  };

  return <Presentacional data={filteredData} />;
}

export default ItemListContainer;


