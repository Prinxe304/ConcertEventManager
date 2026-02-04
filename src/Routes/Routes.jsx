import EventDetails from "../pages/EventDetails/EventDetails";
import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";

export const Routes = [
  { path: '/', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetails /> }
]




