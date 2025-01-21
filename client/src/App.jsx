import "./App.scss";
import Cards from "./components/features/Cards/Cards";
import Products from "./components/features/Products/Products";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
