import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { Detail } from "./pages/detail";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:categoryId" element={<Products />} />
          <Route exact path="/:detailId" element={<Detail />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
