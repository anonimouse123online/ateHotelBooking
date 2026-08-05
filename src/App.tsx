import { MapPin, Sparkles } from "lucide-react";
import Gallery from "./components/Gallery";
import RoomDetails from "./components/RoomDetails";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  return (
    <main>
      <section className="hero hero-placeholder">
        <div className="hero-background-text">Room photo coming soon</div>

        <div className="hero-overlay">
          <p className="hero-label">Short-term accommodation</p>

          <h1>Comfortable Spare Room in Southbank</h1>

          <div className="hero-location">
            <MapPin size={18} />
            <span>Southbank, Melbourne, Victoria</span>
          </div>
        </div>
      </section>

      <section className="container intro-section">
        <div>
          <div className="rating">
            <Sparkles size={18} />
            <span>Welcoming family home</span>
          </div>

          <h2>Looking for short-term accommodation in Melbourne?</h2>

          <p className="description">
            One of our spare rooms is available in our family apartment in
            Southbank. The room is suitable for someone looking for a
            comfortable, convenient, and welcoming place to stay in Melbourne.
          </p>

          <div className="stay-summary">
            <div>
              <strong>4 weeks</strong>
              <span>Minimum stay</span>
            </div>

            <div>
              <strong>8 weeks</strong>
              <span>Maximum stay</span>
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
        </div>
      </section>

      <Gallery />

      <RoomDetails />

      <BookingForm />

      <footer>
        <p>Southbank Short-Term Accommodation</p>
        <small>Melbourne, Victoria, Australia</small>
      </footer>
    </main>
  );
}

export default App;