import CartItem from "../components/CartItem";
import "../css/cart.css";

function Cart() {
  const menuItems = [
    { name: "Pizza", imageUrl: "/img/pizza.png", price: "12.99" },
    {
      name: "Fish and chips",
      imageUrl: "/img/fish-and-chips.png",
      price: "14.99",
    },
    { name: "Lasagna", imageUrl: "/img/lasagna.png", price: "13.99" },
  ];
  return (
    <div id="cart" className="container">
      <h1>Cart</h1>
      <div className="row justify-content-center cartContent">
        <div className="col-md-12 col-lg-8">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="textCart">Your cart</span>
            <span className="badge rounded-pill" id="numOfItems">
              3
            </span>
          </h4>
          <div id="cartList">
            <ul className="list-group mb-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <CartItem
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.price}
                  />
                </li>
              ))}
            </ul>
            <form>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault1"
                />
                <label className="form-check-label" htmlFor="radioDefault1">
                  for takeaway{" "}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radioDefault"
                  id="radioDefault2"
                />
                <label className="form-check-label" htmlFor="radioDefault2">
                  for delivery (+$4){" "}
                </label>
              </div>
            </form>
            <div className="d-flex justify-content-center align-items-center">
              <button id="orderBtn">Order now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
