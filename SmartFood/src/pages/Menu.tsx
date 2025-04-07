import MenuItem from "../components/MenuItem";

function Menu() {
  const menuItems = [{name: "Pizza", imageUrl: "/img/pizza.png"}, {name: "Burger", imageUrl: "/img/burger.png"}];

  return (
    <main>
      <h1>Menu</h1>
      <ul className="d-flex">
        {menuItems.map((item, index) => (
          <li key={index}>
            <MenuItem name={item.name} imageUrl={item.imageUrl} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Menu;
