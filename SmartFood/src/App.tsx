import { useState } from "react";
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
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage.toLowerCase()) {
      case "home":
        return <Home />;

      case "menu":
        return <Menu />;

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      case "cart":
        return <Cart />;

      case "sign up":
        return <Signup />;

      case "login":
        return <Login />;

      case "reserve":
        return <Reserve />;

      case "hilfe":
        return <Hilfe />;

      case "impressum":
        return <Impressum />;

      default:
        return <Home />;
    }
  };
  return (
    <>
      <Navbar items={navbarItems} onSelectItem={setActivePage} />
      {renderPage()}
      <Footer items={footerItems} onSelectItem={setActivePage} />
    </>
  );
}

export default App;
