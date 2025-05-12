type ImageProps = {
    name: string;
    imageurl: string;
    alt: string;
};

function Image({ name, imageurl, alt }: ImageProps) {
  return (
    <div className="text-center mx-1 bg-light">
        <img src={imageurl} className="img-fluid img-thumbnail" alt={alt}></img>
        <p className="text-dark">{name}</p>
    </div>
    
  );
}

export default Image;
