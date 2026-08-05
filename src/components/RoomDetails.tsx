import {
  Building2,
  CalendarDays,
  Car,
  Droplets,
  Home,
  MapPin,
  TramFront,
  Users,
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
    icon: <Building2 size={24} />,
    title: "Apartment living",
    description: "A comfortable room inside a Southbank apartment.",
  },
  {
    icon: <TramFront size={24} />,
    title: "Convenient location",
    description: "Easy access to Melbourne workplaces and local services.",
  },
  {
    icon: <Home size={24} />,
    title: "Welcoming home",
    description: "A peaceful and comfortable space for your Melbourne stay.",
  },
];

function RoomDetails() {
  return (
    <section className="details-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">What is included</p>
          <h2>Room and accommodation details</h2>
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
        </div>

        <article className="about-card">
          <p className="section-label">About the household</p>

          <h2>A welcoming family home</h2>

          <p>
            We are a family of three—Hardi, Renson, and our four-year-old
            daughter, Hiraya. We have been fortunate to rent this apartment
            since May 2025, and it has become our lovely home.
          </p>

          <p>
            This apartment has been more than just a place to live. It has been
            our little sanctuary, filled with wonderful memories shared with
            family and friends. Its location has been incredibly convenient,
            with easy access to our workplaces and our daughter&apos;s
            childcare, making everyday life easier for our family.
          </p>

          <p>
            Earlier this year, we decided to rent out our spare room. Our first
            tenant was a fellow Filipino who came to Australia to prepare for
            her OSCE examination. We are delighted that she successfully passed
            her examination while staying here, and we are happy to have been
            part of her journey.
          </p>

          <p>
            We hope our home will continue to provide comfort, convenience, and
            a welcoming space for its next tenant.
          </p>
        </article>
      </div>
    </section>
  );
}

export default RoomDetails;