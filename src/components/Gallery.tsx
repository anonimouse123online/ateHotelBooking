import bedroomOne from "../assets/ate1.jpg";
import cityView from "../assets/ate2.jpg";
import bedroomTwo from "../assets/ate3.jpg";
import bathroom from "../assets/ate4.jpg";

import kitchen from "../assets/kitchen.jpg";
import livingRoom from "../assets/livin.jpg";
import diningArea from "../assets/dining.jpg";

const galleryImages = [
  {
    title: "Main room",
    description: "Queen-size bed with a built-in robe",
    image: bedroomOne,
  },
  {
    title: "Melbourne city view",
    description: "Beautiful city view from the 18th-floor apartment",
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
  {
    title: "Kitchen",
    description: "Modern kitchen with plenty of space for everyday cooking",
    image: kitchen,
  },
  {
    title: "Living room",
    description: "Comfortable shared living area with natural light",
    image: livingRoom,
  },
  {
    title: "Dining area",
    description: "Bright dining area overlooking the apartment surroundings",
    image: diningArea,
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">The accommodation</span>

          <h2>Room & apartment gallery</h2>

          <p className="gallery-note">
            Explore the private bedroom and shared spaces, including the
            kitchen, living room, dining area, bathroom, and Melbourne city
            views from the Southbank apartment.
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