import EventCard from "../../Components/EventCard";
import { eventList } from "../../Utils/EventDatabase";
import "../../Components/EventCard.css";
import Navi from "../../Components/Navigation/Navi";

export default function EventList() {
  return (
    <>
      <Navi />
      <div className="event-list">
        {eventList.map(({ id, heading, date, img }) => (
          <EventCard
            id={id}
            key={id}
            heading={heading}
            date={date}
            img={img}
          />
        ))}
      </div>
    </>
  );
}
