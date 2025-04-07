import MenuItem from "../components/MenuItem";

function Menu() {
  const menuItems = [{name: "Pizza", imageUrl: "/img/pizza.png"}, {name: "Burger", imageUrl: "/img/burger.png"},
                     {name: "Fish and chips", imageUrl: "/img/fish-and-chips.png"}, {name: "Gyros", imageUrl: "/img/gyros.png"},
                     {name: "Lasagna", imageUrl: "/img/lasagna.png"}, {name: "Salad", imageUrl: "/img/salad.png"},
                     {name: "Spaghetti", imageUrl: "/img/spaghetti.png"}
  ];

  return (
    <main>
      <h1>Menu</h1>
      <ul className="d-flex flex-wrap">
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
