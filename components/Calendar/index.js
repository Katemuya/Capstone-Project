import { Calendar as MyCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import addHours from "date-fns/addHours";
import startOfDay from "date-fns/startOfDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

const locales = {
  "de-AT": require("date-fns/locale/de-AT"),
};
//set up localizer for date-fns
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
  addHours,
  startOfDay,
});

//Style MyCalendar
const StyledMyCalendar = styled(MyCalendar)`
  height: 500px;
  margin: 10px;
`;

export default function Calendar({ events }) {
  return (
    <StyledMyCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  );
}
