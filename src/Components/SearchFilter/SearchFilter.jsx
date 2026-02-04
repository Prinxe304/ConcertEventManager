
import { eventList } from "../../Utils/EventDatabase";
import EventCard from "../EventCard";

const SearchFilter = ({ getMonthYear }) => {
  const { getMonth, getYear } = getMonthYear;
  const filterTheEvent = eventList.filter((event) => {
    return (
      event.date.year === getYear &&
      event.date.month === getMonth
    );
  });

  const renderToDisplay = () => {
    return (
      <div>
        {filterTheEvent.map(({ id, heading, date, img }) => (
          <EventCard
            id={id}
            heading={heading}
            date={date}
            img={img}
          />
        ))}
      </div>
    );
  }


  return (
    <div>
      {renderToDisplay()
      }
    </div>
  );
};

export default SearchFilter;
