import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />      
      <ItemDetailContainer />
      <Main />      
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
