
import { Link, useParams } from "react-router-dom";
import { eventList } from "../../Utils/EventDatabase";
import "./EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const nId = Number(id);

  // 🔒 Guard invalid id
  if (Number.isNaN(nId)) {
    return <div>Invalid event ID</div>;
  }

  const fetchData = eventList.find(event => event.id === nId);

  // 🔒 Guard missing event
  if (!fetchData) {
    return <div>Event not found</div>;
  }

  const { heading, date, img } = fetchData;
  const { month, year } = date;

  return (
    <div className="event-banner">
      {/* LEFT */}
      <div className="banner-left">
        <span className="music-text">Events & Concerts</span>

        <h2 className="party-text">{heading}</h2>

        <p className="banner-desc">
          Buy and sell tickets for top tours, festivals, and more.
          Find detailed seating charts and concert info.
        </p>

        <p className="banner-date">
          {month} {year}
        </p>

        <div className="ticket-row">
          <div className="qr-box">▣▣</div>
          <div>
            <p className="ticket-label">TICKETS ON</p>
            <span className="ticket-site">www.yourticket.com</span>
          </div>
        </div>

        <Link to="/">
          <button className="view-more">Back to Events</button>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="banner-right">
        <div className="image-bg"></div>
        <img src={img} alt={heading} />
      </div>
    </div>
  );
}
