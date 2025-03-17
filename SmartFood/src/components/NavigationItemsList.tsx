
interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
  selectedIndex: number;
}

function NavigationItemsList({ items, onSelectItem, selectedIndex }: Props) {

  return (
    <ul className="navbar-nav ms-auto ">
      {items.map((item, index) => (
        <li
          key={item}
          className={
            selectedIndex === index ? "nav-item me-3 active" : "nav-item me-3"
          }
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
