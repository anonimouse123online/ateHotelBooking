import { MapPin, Sparkles } from "lucide-react";
import Gallery from "./components/Gallery";
import RoomDetails from "./components/RoomDetails";
import BookingForm from "./components/BookingForm";
import heroImage from "./assets/ate1.jpg";
import "./App.css";

function App() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">
          <p className="hero-label">Short-term accommodation</p>

          <h1>
            Queen-Size Room with Melbourne City Views
          </h1>

          <div className="hero-location">
            <MapPin size={18} />
            <span>Southbank, Melbourne, Victoria</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container intro-section">
        <div>
          <div className="rating">
            <Sparkles size={18} />
            <span>Welcoming family home</span>
          </div>

          <h2>
            Comfortable apartment living in the heart of Southbank
          </h2>

          <p className="description">
            A private room with a queen-size bed and built-in robe is
            available in our family apartment on the 18th floor in
            Southbank. Enjoy a comfortable stay with beautiful Melbourne
            city lights and convenient access to local workplaces,
            transport, shops, and services.
          </p>

          <p className="description">
            The room is available to one female tenant only. Couples, pets,
            and smoking are not permitted.
          </p>

          <div className="stay-summary">
            <div>
              <strong>Queen bed</strong>
              <span>With built-in robe</span>
            </div>

            <div>
              <strong>4–8 weeks</strong>
              <span>Short-term stay</span>
            </div>

            <div>
              <strong>All included</strong>
              <span>Electricity, water and Wi-Fi</span>
            </div>
          </div>
        </div>

        <div className="price-card">
          <span>Weekly rent</span>
          <strong>$250</strong>
          <small>per week, all bills included</small>

          <a href="#booking" className="primary-button">
            Send an inquiry
          </a>

          <a href="tel:0450532627" className="secondary-button">
            Call 0450 532 627
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* ROOM DETAILS */}
      <RoomDetails />

      {/* BOOKING */}
      <BookingForm />

      {/* FOOTER */}
      <footer>
        <p>Southbank Short-Term Accommodation</p>

        <small>
          Queen-size room on the 18th floor in Southbank, Melbourne
        </small>

        <div className="footer-contact">
          <a href="tel:0450532627">
            0450 532 627
          </a>

          <span>•</span>

          <a href="mailto:hardipero@gmail.com">
            hardipero@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;