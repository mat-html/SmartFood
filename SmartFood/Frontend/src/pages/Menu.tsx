import { useEffect, useState } from "react";
import MenuItem, { Product } from "../components/MenuItem";
import ProductModal from "../components/ProductModal";

function Menu() {
  const [menuItems, setMenuItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        console.error("Failed to fetch menu items:", err);
      }
    };
    
    fetchMenuItems();
  }, []);
  
  const handleItemClick = (item: Product) => {
    setSelectedProduct(item);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  console.log(menuItems);

  return (
    <main>
      <h1>Menu</h1>
      <ul className="d-flex flex-wrap">
        {menuItems.map((item, index) => (
          <li key={index}>
            <MenuItem
              name={item.name}
              imageurl={item.imageurl}
              price={item.price}
              onProductClick={handleItemClick}
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
