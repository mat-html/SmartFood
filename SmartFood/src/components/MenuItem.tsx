import "../css/menu-item.css";

type MenuItemProps = {
  name: string;
  imageUrl: string;
};

function MenuItem ({ name, imageUrl }: MenuItemProps) {
    return (
        <div className="col m-2">
            <div className="card shadow-sm">
                <svg className="menu-item-svg bd-placeholder-img card-img-top" xmlns="http://www.w3.org/2000/svg" role="img" 
                aria-label="Placeholder: Thumbnail" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" width="18vw" height="18vw">
                    <image href={imageUrl} width="100%" height="100%" />
                </svg>
                <div className="card-body">
                    <p className="text-center">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
