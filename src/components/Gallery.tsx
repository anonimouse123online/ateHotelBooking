import bedroomOne from "../assets/ate1.jpg";
import cityView from "../assets/ate2.jpg";
import bedroomTwo from "../assets/ate3.jpg";
import bathroom from "../assets/ate4.jpg";

const galleryImages = [
  {
    title: "Main room",
    description: "Queen-size bed with a built-in robe",
    image: bedroomOne,
  },
  {
    title: "Melbourne city view",
    description: "City view from the 18th-floor apartment",
    image: cityView,
  },
  {
    title: "Room interior",
    description: "A comfortable private bedroom",
    image: bedroomTwo,
  },
  {
    title: "Bathroom",
    description: "Modern apartment bathroom",
    image: bathroom,
  },
];

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">The accommodation</p>

          <h2>Room gallery</h2>

          <p className="gallery-note">
            View the bedroom, bathroom, and Melbourne city view from the
            Southbank apartment.
          </p>
        </div>

        <div className="gallery">
          {galleryImages.map((item, index) => (
            <article
              key={item.title}
              className={`gallery-image-card ${
                index === 0 ? "gallery-main" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.description}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <div className="gallery-image-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;