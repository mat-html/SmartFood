import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Reserve from "./pages/Reserve";
import Hilfe from "./pages/Hilfe";
import Impressum from "./pages/Impressum";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let navbarItems = [
  "Home",
  "Menu",
  "About",
  "Reserve",
  "Cart",
  "Sign Up",
  "Login",
];

let footerItems = ["Contact", "Hilfe", "Impressum"];

function App() {
  return (
    <BrowserRouter>
      <Navbar items={navbarItems} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/hilfe" element={<Hilfe />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign up" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer items={footerItems} />
    </BrowserRouter>
  );
}

export default App;
