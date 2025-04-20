import { NavLink } from "react-router-dom";

interface Props {
  items: string[];
}

function NavigationItemsList({ items }: Props) {
  const getActiveStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "orange" : "white",
    };
  };
  return (
    <ul className="navbar-nav ms-auto">
      {items.map((item) => (
        <li key={item} className="nav-item me-3">
          <NavLink
            to={`/${item.toLowerCase()}`}
            className="nav-link"
            style={getActiveStyle}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavigationItemsList;
