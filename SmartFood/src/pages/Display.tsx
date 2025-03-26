const produkt = [{
  id:
  beschreibung:
  preis
  pname
  bild
}
];

function Display() {
  return (
    <main>
      <h1>{produkt.pname}</h1>
      <img src={produkt.bild} alt={produkt.name} style={{ width: '300px' }} />
      <p>{produkt.beschreibung}</p>
      <p><strong>Preis:</strong> {produkt.preis}</p>
      <button>In den Warenkorb</button>
    </main>
  );
}

export default Display;
