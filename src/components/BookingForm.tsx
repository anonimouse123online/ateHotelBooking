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
  agreesToRequirements: boolean;
}

const initialForm: BookingData = {
  name: "",
  phone: "",
  email: "",
  moveInDate: "",
  moveOutDate: "",
  occupants: "1",
  message: "",
  agreesToRequirements: false,
};

function calculateWeeks(startDate: string, endDate: string): number {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  const difference = end.getTime() - start.getTime();

  if (difference <= 0) {
    return 0;
  }

  return difference / (1000 * 60 * 60 * 24 * 7);
}

function BookingForm() {
  const [formData, setFormData] =
    useState<BookingData>(initialForm);

  const [formError, setFormError] = useState("");

  const numberOfWeeks = useMemo(
    () =>
      calculateWeeks(
        formData.moveInDate,
        formData.moveOutDate
      ),
    [formData.moveInDate, formData.moveOutDate]
  );

  const estimatedPrice =
    numberOfWeeks > 0
      ? Math.ceil(numberOfWeeks) * 250
      : 0;

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (numberOfWeeks < 4) {
      setFormError(
        "The minimum accommodation period is 4 weeks."
      );
      return;
    }

    if (numberOfWeeks > 8) {
      setFormError(
        "The maximum accommodation period is 8 weeks."
      );
      return;
    }

    if (formData.occupants !== "1") {
      setFormError(
        "The room is available for one female occupant only."
      );
      return;
    }

    if (!formData.agreesToRequirements) {
      setFormError(
        "Please confirm that you meet the tenant requirements."
      );
      return;
    }

    const whatsappNumber = "61450532627";

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

About me:
${formData.message || "No additional message provided."}

I understand the following:
- The room is for one female occupant only
- No couples
- No pets
- No smoking
- Rent is $250 per week
- Electricity, water, and Wi-Fi are included
- Minimum stay is 4 weeks
- Maximum stay is 8 weeks
`.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="booking-section" id="booking">
      <div className="container booking-layout">
        <div className="booking-information">
          <p className="section-label">
            Interested in the room?
          </p>

          <h2>Send an accommodation inquiry</h2>

          <p>
            Complete the form with your preferred dates.
            The household will contact you to discuss
            availability and confirm the accommodation.
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

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >
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
              <label htmlFor="phone">
                Phone number
              </label>

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
              <label htmlFor="email">
                Email address
              </label>

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
              <label htmlFor="moveInDate">
                Preferred move-in date
              </label>

              <div className="input-icon">
                <CalendarDays size={18} />

                <input
                  id="moveInDate"
                  type="date"
                  min={today}
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
              <label htmlFor="moveOutDate">
                Preferred move-out date
              </label>

              <div className="input-icon">
                <CalendarDays size={18} />

                <input
                  id="moveOutDate"
                  type="date"
                  min={formData.moveInDate || today}
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
              <div>
                <span>Length of stay</span>
                <strong>
                  {numberOfWeeks.toFixed(1)} weeks
                </strong>
              </div>

              <div>
                <span>
                  Estimated accommodation cost
                </span>

                <strong>${estimatedPrice}</strong>
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="occupants">
              Number of occupants
            </label>

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
            </select>

            <small className="input-note">
              The room is available for one female
              occupant only.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Tell us about yourself
            </label>

            <textarea
              id="message"
              placeholder="Introduce yourself, your occupation or studies, and the reason for your stay"
              rows={5}
              value={formData.message}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  message: event.target.value,
                })
              }
              required
            />
          </div>

          <label className="requirements-checkbox">
            <input
              type="checkbox"
              checked={formData.agreesToRequirements}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  agreesToRequirements:
                    event.target.checked,
                })
              }
            />

            <span>
              I confirm that I am a female applicant,
              will be the only occupant, do not smoke,
              and will not bring pets.
            </span>
          </label>

          {formError && (
            <p className="form-error">{formError}</p>
          )}

          <button
            type="submit"
            className="submit-button"
          >
            Send inquiry through WhatsApp
          </button>

          <p className="form-disclaimer">
            Sending an inquiry does not automatically
            confirm the accommodation. Availability must
            be confirmed by the household.
          </p>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;