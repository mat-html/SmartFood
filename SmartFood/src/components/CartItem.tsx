type CartItemProps = {
  name: string;
  imageUrl: string;
  price: string;
};
function CartItem({ name, imageUrl, price }: CartItemProps) {
  return (
    <div className="col m-2">
      <div className=" shadow-sm d-flex cartListItem">
        <div>
          <svg
            className="menu-item-svg bd-placeholder-img card-img-start"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            width="18vw"
            height="18vw"
          >
            <image href={imageUrl} width="100%" height="100%" />
          </svg>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="text-center ms-5" id="cartItemName">
            {name}
          </div>
          <div className="text-end me-5" id="cartItemPrice">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
