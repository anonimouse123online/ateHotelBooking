import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

interface BookingData {
  name: string;
  phone: string;
  email: string;
  moveInDate: string;
  moveOutDate: string;
  occupants: string;
  message: string;
}

const initialForm: BookingData = {
  name: "",
  phone: "",
  email: "",
  moveInDate: "",
  moveOutDate: "",
  occupants: "1",
  message: "",
};

function calculateWeeks(startDate: string, endDate: string): number {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  const difference = end.getTime() - start.getTime();

  if (difference <= 0) {
    return 0;
  }

  return difference / (1000 * 60 * 60 * 24 * 7);
}

function BookingForm() {
  const [formData, setFormData] = useState<BookingData>(initialForm);
  const [formError, setFormError] = useState("");

  const numberOfWeeks = useMemo(
    () => calculateWeeks(formData.moveInDate, formData.moveOutDate),
    [formData.moveInDate, formData.moveOutDate]
  );

  const estimatedPrice =
    numberOfWeeks > 0 ? Math.ceil(numberOfWeeks) * 250 : 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (numberOfWeeks < 4) {
      setFormError("The minimum accommodation period is 4 weeks.");
      return;
    }

    if (numberOfWeeks > 8) {
      setFormError("The maximum accommodation period is 8 weeks.");
      return;
    }

    const whatsappNumber = "61400000000";

    const message = `
Hello! I would like to inquire about the Southbank spare room.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred move-in date: ${formData.moveInDate}
Preferred move-out date: ${formData.moveOutDate}
Length of stay: ${numberOfWeeks.toFixed(1)} weeks
Number of occupants: ${formData.occupants}
Estimated accommodation cost: $${estimatedPrice}
Additional message: ${formData.message || "None"}

I understand that the room costs $250 per week, including electricity, water, and Wi-Fi.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking-section" id="booking">
      <div className="container booking-layout">
        <div className="contact-information">
          <p className="section-label light-label">Interested in the room?</p>

          <h2>Send an accommodation inquiry</h2>

          <p>
            Complete the form with your preferred dates. The household will
            contact you to discuss availability and confirm the accommodation.
          </p>

          <div className="contact-list">
            <div>
              <Phone size={20} />
              <span>Phone number coming soon</span>
            </div>

            <div>
              <Mail size={20} />
              <span>Email address coming soon</span>
            </div>

            <div>
              <MapPin size={20} />
              <span>Southbank, Melbourne, Victoria 3006</span>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <MessageCircle size={25} />
            <h3>Accommodation inquiry</h3>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  name: event.target.value,
                })
              }
              required
            />
          </div>

          <div className="date-grid">
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    phone: event.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    email: event.target.value,
                  })
                }
                required
              />
            </div>
          </div>

          <div className="date-grid">
            <div className="form-group">
              <label htmlFor="moveInDate">Preferred move-in date</label>

              <div className="input-icon">
                <CalendarDays size={18} />

                <input
                  id="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      moveInDate: event.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="moveOutDate">Preferred move-out date</label>

              <div className="input-icon">
                <CalendarDays size={18} />

                <input
                  id="moveOutDate"
                  type="date"
                  value={formData.moveOutDate}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      moveOutDate: event.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {numberOfWeeks > 0 && (
            <div className="booking-estimate">
              <span>Length of stay</span>
              <strong>{numberOfWeeks.toFixed(1)} weeks</strong>

              <span>Estimated accommodation cost</span>
              <strong>${estimatedPrice}</strong>
            </div>
          )}

          {formError && <p className="form-error">{formError}</p>}

          <div className="form-group">
            <label htmlFor="occupants">Number of occupants</label>

            <select
              id="occupants"
              value={formData.occupants}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  occupants: event.target.value,
                })
              }
            >
              <option value="1">1 occupant</option>
              <option value="2">2 occupants</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell us about yourself</label>

            <textarea
              id="message"
              placeholder="Introduce yourself and explain the reason for your stay"
              rows={5}
              value={formData.message}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  message: event.target.value,
                })
              }
            />
          </div>

          <button type="submit" className="submit-button">
            Send inquiry through WhatsApp
          </button>

          <p className="form-disclaimer">
            Sending an inquiry does not automatically confirm the
            accommodation. Availability must be confirmed by the household.
          </p>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;