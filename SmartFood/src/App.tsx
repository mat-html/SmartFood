import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

let items = ["Home", "Menu", "About", "Contact"];


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
      default:
        return <Home />;
  }}
  return (
    <>
      <Navbar items={items} onSelectItem={setActivePage} />
      {renderPage()}
      <Footer items={items} onSelectItem={setActivePage} />
    </>
  );
}

export default App;
