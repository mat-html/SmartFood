function Home() {
  return (
    <main
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        padding: "2rem",
        color: "#ffffff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          marginBottom: "1rem",
        }}
      >
        Welcome to SmartFood
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cccccc",
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto 3rem",
        }}
      >
        An unforgettable dining experience awaits you
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          padding: "0 1rem",
        }}
      >
        {[
          {
            title: "Menu",
            desc: "Discover our delicious offerings",
            img: "/img/menu.jpg",
          },
          {
            title: "Reserve",
            desc: "Book your table easily online",
            img: "/img/reserve.jpg",
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "1rem",
              backgroundColor: "#2a2a2a",
              boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              width: "300px",
            }}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("nav", { detail: card.title })
              )
            }
          >
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "1rem",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1.4rem",
                  color: "#ffffff",
                }}
              >
                {card.title}
              </h2>
              <p
                style={{
                  margin: "0",
                  fontSize: "0.95rem",
                  color: "#cccccc",
                }}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginTop: "4rem",
          padding: "1rem 0",
          borderTop: "1px solid #444",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "slide 25s linear infinite",
          }}
        >
          {[
            "/img/slide1.jpg",
            "/img/slide2.jpg",
            "/img/slide3.jpg",
            "/img/slide4.jpg",
            "/img/slide5.jpg",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Food ${i}`}
              style={{
                height: "180px",
                marginRight: "1.5rem",
                borderRadius: "0.5rem",
              }}
            />
          ))}
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "#ff9900",
          fontSize: "1.8rem",
          marginTop: "4rem",
          marginBottom: "1.5rem",
          fontStyle: "italic",
          fontWeight: "400",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          letterSpacing: "0.5px",
        }}
      >
        ✨ Kommentare von unseren Kunden ✨
      </h2>

      <div
        style={{
          overflow: "hidden",
          marginTop: "3rem",
          padding: "1.5rem 0",
          borderTop: "1px solid #444",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            animation: "slide-reviews 40s linear infinite",
          }}
        >
          {[
            `"This was the best pasta I've ever had!" – Lisa M.`,
            `"Amazing service and beautiful ambience." – John D.`,
            `"The dessert menu is to die for!" – Clara S.`,
            `"I booked a table online in 2 minutes!" – Marco A.`,
            `"5 stars, would eat here every week." – Anna R.`,
          ].map((text, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                backgroundColor: "#2a2a2a",
                padding: "1rem 1.5rem",
                borderRadius: "1rem",
                color: "#ffffff",
                fontSize: "1rem",
                minWidth: "300px",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-reviews {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}
      </style>
    </main>
  );
}

export default Home;
