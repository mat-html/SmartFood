import NavigationItemsList from "./NavigationItemsList";
import Logo from "./Logo";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function Navbar({ items, onSelectItem }: Props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container mt-3">
          <Logo onSelectItem={onSelectItem} />

          <div className="collapse navbar-collapse" id="navbarNav">
            <NavigationItemsList items={items} onSelectItem={onSelectItem} />
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
      <div className="border-bottom mb-3 mt-2"></div>
    </header>
  );
}

export default Navbar;
