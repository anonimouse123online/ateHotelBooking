import { BedDouble, Building2, Image, MapPinned } from "lucide-react";

const placeholders = [
  {
    title: "Main room",
    description: "Main bedroom photo coming soon",
    icon: <BedDouble size={40} />,
  },
  {
    title: "Apartment interior",
    description: "Living area photo coming soon",
    icon: <Building2 size={34} />,
  },
  {
    title: "Room details",
    description: "Additional room photo coming soon",
    icon: <Image size={34} />,
  },
  {
    title: "Southbank location",
    description: "Building or location photo coming soon",
    icon: <MapPinned size={34} />,
  },
];

function Gallery() {
  return (
    <section className="container section">
      <div className="section-heading">
        <p className="section-label">The accommodation</p>
        <h2>Room gallery</h2>

        <p className="gallery-note">
          Actual room and apartment photos will be added soon.
        </p>
      </div>

      <div className="gallery placeholder-gallery">
        {placeholders.map((item, index) => (
          <article
            key={item.title}
            className={`image-placeholder ${
              index === 0 ? "gallery-main" : ""
            }`}
          >
            <div className="placeholder-icon">{item.icon}</div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;