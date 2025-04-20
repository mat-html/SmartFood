import Image from "../components/Image";

function About() {
  const creatorImages = [
    { name: "Barnabás Mátrai", imageUrl: "/img/creators/Matrai_Barnabas.png", alt: "Barnabas_Matrai" },
    { name: "Barnabás Mátrai", imageUrl: "/img/creators/Matrai_Barnabas.png", alt: "Barnabas_Matrai" },
    { name: "Barnabás Mátrai", imageUrl: "/img/creators/Matrai_Barnabas.png", alt: "Barnabas_Matrai" },
    { name: "Barnabás Mátrai", imageUrl: "/img/creators/Matrai_Barnabas.png", alt: "Barnabas_Matrai" },
    { name: "Barnabás Mátrai", imageUrl: "/img/creators/Matrai_Barnabas.png", alt: "Barnabas_Matrai" }
  ];

  return (
    <main>
      <div id="about-us-text">
        <h1>About Us</h1>
        <p className="pb-4">
          At SmartFood, we believe great food should be easy to enjoy — whether you're dining in or grabbing something to go.
        </p>
        <h4>OUR GOALS</h4>
        <p>
          Born out of a love for delicious meals and frustration with clunky ordering systems, we set out to create a restaurant experience that puts simplicity first. No more long waits, confusing menus, or awkward payment processes. Just a straightforward, intuitive way to get exactly what you want — fast, fresh, and fuss-free.
        </p>
        <h4>OUR MISSION</h4>
        <p>
          Our mission is to make ordering seamless and stress-free, so you can focus on what really matters: the food, the flavors, and the people you're sharing them with. With user-friendly technology at the heart of our service, we’re redefining what it means to eat out — or take it home.
        </p>
        <p className="pt-4">
          Whether you're stopping by for a quick bite or planning a cozy night in, we’ve made the process effortless. Because good food should never be complicated.
        </p>
        <p>
          Welcome to Smartfood — where great taste meets smart simplicity.
        </p>
      </div>
      <div className="d-flex align-items-center">
        {creatorImages.map((image) => (
          <Image name={image.name} imageUrl={image.imageUrl} alt={image.alt}/>
        ))}
      </div>
    </main>
  );
}

export default About;
