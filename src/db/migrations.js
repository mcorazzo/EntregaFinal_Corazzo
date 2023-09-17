import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import data from "./seedData.json";

const collectionProducts = collection(db, "products")
data.forEach((product) => {

  addDoc(collectionProducts, product)
    .then((result) => {
      console.log("Resultado:", result)
      return console.log("Productos Agregados")
    })
    .catch((error) => {
      console.log("Error:", error);
      return console.log("Problemas al Ingresar Productos")
    });

});


