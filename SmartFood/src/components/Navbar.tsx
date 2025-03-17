import { useState } from "react";
import NavigationItemsList from "./NavigationItemsList";
import Logo from "./Logo";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function Navbar({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container mt-3">
          <Logo onSelectItem={(item) => {onSelectItem(item); setSelectedIndex(0)}} selectedIndex={selectedIndex}/>

          <div className="collapse navbar-collapse" id="navbarNav">
            <NavigationItemsList items={items} onSelectItem={(item) => {onSelectItem(item); setSelectedIndex(items.indexOf(item))}} selectedIndex={selectedIndex}/>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
