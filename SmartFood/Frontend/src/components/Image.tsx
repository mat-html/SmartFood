type ImageProps = {
    name: string;
    imageUrl: string;
    alt: string;
};

function Image({ name, imageUrl, alt }: ImageProps) {
  return (
    <div className="text-center mx-1 bg-light">
        <img src={imageUrl} className="img-fluid img-thumbnail" alt={alt}></img>
        <p className="text-dark">{name}</p>
    </div>
    
  );
}

export default Image;
