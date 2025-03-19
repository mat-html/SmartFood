interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function NavigationItemsList({ items, onSelectItem }: Props) {
  return (
    <ul className="navbar-nav ms-auto ">
      {items.map((item) => (
          <li
            key={item}
            className="nav-item me-3"
            onClick={() => {
              onSelectItem(item);
            }}
          >
            <span className="nav-link">{item}</span>
          </li>
      ))}
    </ul>
  );
}

export default NavigationItemsList;
