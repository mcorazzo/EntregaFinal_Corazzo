import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import PurchaseSummary from "./PurchaseSummary";
import Cart from "./Cart";



function Main() {
  return (
    <main className="p-2 grow">
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/purchase-summary" element={<PurchaseSummary />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </main>
  );
}

export default Main
