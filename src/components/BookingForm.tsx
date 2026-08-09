import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";

function BookingForm() {
  const whatsappNumber = "61450532627";

  const whatsappMessage =
    "Hi! I'm interested in the Southbank room. Is it still available?";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}` +
    `?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="booking-section" id="booking">
      <div className="container booking-layout">
        {/* LEFT SIDE */}
        <div className="booking-information">
          <p className="section-label">
            Interested in the room?
          </p>

          <h2>Get in touch</h2>

          <p>
            Interested in staying at the Southbank apartment?
            Contact us directly to ask about availability,
            move-in dates, or any other questions.
          </p>

          <div className="contact-list">
            <a href="tel:0450532627">
              <Phone size={20} />
              <span>0450 532 627</span>
            </a>

            <a href="mailto:hardipero@gmail.com">
              <Mail size={20} />
              <span>hardipero@gmail.com</span>
            </a>

            <div>
              <MapPin size={20} />

              <span>
                Southbank, Melbourne, Victoria 3006
              </span>
            </div>
          </div>

          <div className="tenant-requirements">
            <h3>Tenant requirements</h3>

            <ul>
              <li>One female occupant only</li>
              <li>No couples</li>
              <li>No pets</li>
              <li>No smoking</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-card">
          <div className="form-title">
            <MessageCircle size={25} />
            <h3>Contact us</h3>
          </div>

          <p className="contact-card-description">
            Have a question about the room? Send us a
            message and we'll be happy to discuss
            availability and your preferred dates.
          </p>

          <div className="contact-benefits">
            <div>
              <CheckCircle2 size={19} />
              <span>Ask about current availability</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Discuss your preferred move-in date</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Ask questions about the apartment</span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="submit-button whatsapp-contact-button"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>

          <div className="contact-divider">
            <span>or</span>
          </div>

          <a
            href="mailto:hardipero@gmail.com?subject=Southbank%20Room%20Inquiry&body=Hi%2C%20I'm%20interested%20in%20the%20Southbank%20room."
            className="email-contact-button"
          >
            <Mail size={20} />
            Send an Email
          </a>

          <p className="form-disclaimer">
            Please note that contacting us does not
            automatically reserve the room. Availability
            will be confirmed directly with you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;