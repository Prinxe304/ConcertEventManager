
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, heading, date, img }) => {
  const { month, year } = date;
  console.log(id)
  return (
    <Link to={`/events/${id}`} >
      <div className="event-banner">
        {/* LEFT */}
        <div className="banner-left">
          <span className="music-text">Music</span>
          <h2 className="party-text">{heading}</h2>
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
        </div>

        {/* RIGHT */}
        <div className="banner-right">
          <img src={img} alt={heading} />
        </div>
      </div>
    </Link >
  );
};

export default EventCard;
