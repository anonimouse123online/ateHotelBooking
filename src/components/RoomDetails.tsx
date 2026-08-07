import {
  Building2,
  CalendarDays,
  Car,
  CigaretteOff,
  Contact,
  Dog,
  Droplets,
  Dumbbell,
  Home,
  Mail,
  MapPin,
  Phone,
  Shirt,
  Sparkles,
  Users,
  Waves,
  Wifi,
  Zap,
} from "lucide-react";

const inclusions = [
  {
    icon: <Zap size={24} />,
    title: "Electricity included",
    description: "Electricity costs are included in the weekly rent.",
  },
  {
    icon: <Droplets size={24} />,
    title: "Water included",
    description: "Water usage is included with no additional charge.",
  },
  {
    icon: <Wifi size={24} />,
    title: "Wi-Fi included",
    description: "Internet access is included during your stay.",
  },
  {
    icon: <CalendarDays size={24} />,
    title: "Short-term stay",
    description: "Minimum stay of 4 weeks and maximum stay of 8 weeks.",
  },
  {
    icon: <Users size={24} />,
    title: "Family household",
    description: "Share the apartment with a welcoming family of three.",
  },
  {
    icon: <Home size={24} />,
    title: "Apartment living",
    description:
      "A comfortable private room on the 18th floor of a Southbank apartment.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Melbourne city views",
    description:
      "Enjoy beautiful Melbourne city lights and views from the apartment.",
  },
  {
    icon: <Shirt size={24} />,
    title: "Built-in wardrobe",
    description:
      "The room includes a built-in robe for convenient clothing storage.",
  },
];

const buildingFacilities = [
  {
    icon: <Dumbbell size={26} />,
    title: "Gym",
    description: "Access to the apartment building's gym facilities.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Sauna",
    description: "Relax and unwind using the building's sauna.",
  },
  {
    icon: <Waves size={26} />,
    title: "Swimming pool",
    description: "Enjoy access to the building's indoor swimming pool.",
  },
];

function RoomDetails() {
  return (
    <section className="room-details-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">What is included</p>
          <h2>Room and accommodation details</h2>
          <p>
            A comfortable private room with a queen-size bed and built-in
            robe, located on the 18th floor of a Southbank apartment.
          </p>
        </div>

        <div className="amenities-grid">
          {inclusions.map((item) => (
            <article className="amenity-card" key={item.title}>
              <div className="amenity-icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-heading facilities-heading">
          <p className="section-label">Building facilities</p>
          <h2>Facilities available during your stay</h2>
        </div>

        <div className="amenities-grid facilities-grid">
          {buildingFacilities.map((facility) => (
            <article className="amenity-card" key={facility.title}>
              <div className="amenity-icon">{facility.icon}</div>

              <div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="information-grid">
          <article className="information-card">
            <MapPin size={25} />

            <h3>Location</h3>

            <p>
              <strong>Apartment address:</strong>
            </p>

            <p>
              Unit 1806, 135 City Road
              <br />
              Southbank, VIC 3006
            </p>

            <p>
              <strong>Main entrance:</strong>
            </p>

            <p>Wrap Building, 135 City Road, Southbank</p>
          </article>

          <article className="information-card">
            <Car size={25} />

            <h3>Uber and deliveries</h3>

            <p>
              For Uber pickups and deliveries, the back entrance of the
              apartment can be accessed through:
            </p>

            <p>
              <strong>68 Fawkner Street, Southbank</strong>
            </p>
          </article>

          <article className="information-card">
            <CalendarDays size={25} />

            <h3>Rental information</h3>

            <p>
              <strong>Price:</strong> $250 per week
            </p>

            <p>
              <strong>Minimum stay:</strong> 4 weeks
            </p>

            <p>
              <strong>Maximum stay:</strong> 8 weeks
            </p>

            <p>Electricity, water, and Wi-Fi are included.</p>
          </article>

          <article className="information-card">
            <Contact size={25} />

            <h3>Tenant requirements</h3>

            <p>
              <strong>Female tenant only</strong>
            </p>

            <p>No couples are permitted.</p>

            <p className="requirement-line">
              <Dog size={18} />
              <span>No pets</span>
            </p>

            <p className="requirement-line">
              <CigaretteOff size={18} />
              <span>No smoking</span>
            </p>
          </article>
        </div>

        <article className="contact-card">
          <div>
            <p className="section-label">Interested in the room?</p>
            <h2>Contact us directly</h2>
            <p>
              Get in touch to ask about availability or arrange your
              short-term stay.
            </p>
          </div>

          <div className="contact-options">
            <a href="tel:0450532627" className="contact-option">
              <Phone size={22} />

              <div>
                <span>Call or message</span>
                <strong>0450 532 627</strong>
              </div>
            </a>

            <a
              href="mailto:hardipero@gmail.com"
              className="contact-option"
            >
              <Mail size={22} />

              <div>
                <span>Email</span>
                <strong>hardipero@gmail.com</strong>
              </div>
            </a>
          </div>
        </article>

        <article className="about-card">
          <p className="section-label">About the household</p>

          <h2>A welcoming family home</h2>

          <p>
            We are a family of three—Hardi, Renson, and our four-year-old
            daughter, Hiraya. We have been fortunate to rent this apartment
            since May 2025, and it has become our lovely home.
          </p>

          <p>
            This apartment has been more than just a place to live. It has
            been our little sanctuary, filled with wonderful memories shared
            with family and friends. Its location has been incredibly
            convenient, with easy access to our workplaces and our
            daughter&apos;s childcare, making everyday life easier for our
            family.
          </p>

          <p>
            Earlier this year, we decided to rent out our spare room. Our
            first tenant was a fellow Filipino who came to Australia to
            prepare for her OSCE examination. We are delighted that she
            successfully passed her examination while staying here, and we
            are happy to have been part of her journey.
          </p>

          <p>
            We hope our home will continue to provide comfort, convenience,
            and a welcoming space for its next tenant.
          </p>
        </article>
      </div>
    </section>
  );
}

export default RoomDetails;