import { useState } from 'react';
import MenuItem from "../components/MenuItem";
import type { MenuItemProps } from "../components/MenuItem";
import ProductModal from '../components/ProductModal';

function Menu() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItemProps | null>(null);

  const menuItems = [
    { name: "Pizza", imageUrl: "/img/pizza.png", price: "11.90" },
    { name: "Burger", imageUrl: "/img/burger.png", price: "16.90" },
    { name: "Fish and chips", imageUrl: "/img/fish-and-chips.png", price: "14.90" },
    { name: "Gyros", imageUrl: "/img/gyros.png", price: "13.90" },
    { name: "Lasagna", imageUrl: "/img/lasagna.png", price: "15.90" },
    { name: "Salad", imageUrl: "/img/salad.png", price: "12.90" },
    { name: "Spaghetti", imageUrl: "/img/spaghetti.png", price: "13.90" },
  ];

  const handleItemClick = (item: MenuItemProps) => {
    setSelectedProduct(item);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <main>
      <h1>Menu</h1>
      <ul className="d-flex flex-wrap">
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            <MenuItem
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </main>
  );
}

export default Menu;
