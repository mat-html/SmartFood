import "../css/cart.css";

function Cart() {
  return (
    <main>
      <h1>Cart</h1>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-8">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="textCart">Your cart</span>
            <span className="badge rounded-pill" id="numOfItems">
              3
            </span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <button id="orderBtn">Order now</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
