type MenuItemProps = {
    name: string;
    imageUrl: string;
};

function MenuItem ({ name, imageUrl }: MenuItemProps) {
    return (
        <figure className="figure border">
            <img className="menu-item-image img-thumbnail" src={imageUrl} alt={name}/>
            <figcaption className="figure-caption text-center">{name}</figcaption>
        </figure>
    );

}

export default MenuItem;