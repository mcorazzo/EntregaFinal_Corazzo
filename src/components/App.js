import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Toaster } from "sonner";
import { CartProvider } from "./CartContext";
  

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Toaster
          position="text-center"
          toastOptions={{
            duration: 1000,
            style: {
              backgroundColor: "#00A8A1",
              color: "white",
            },
          }}
        />
        <Main />
        <Footer />        
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
