import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Views } from "react-big-calendar";
import moment from "moment";

import EventDialog from "../EventDialog";

import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = momentLocalizer(moment);

const StyledMyCalendar = styled(MyCalendar)`
  height: 500px;
  margin: 10px;
  background-color: #c4dfdf;
`;
const EventDialogWrapper = styled.div`
  .rbc-calendar {
    /* height: 500px; Adjust the height as needed */
  }

  .rbc-event {
    color: white;
    padding: 2px;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    /* height: 5dvh; */
  }

  .rbc-event-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: white;
  }
`;

export default function Calendar({ events, setEvents }) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function addNewEvent() {
    setEvents([...events, newEvent]);
  }

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      setIsDialogOpen(true);
      setNewEvent((prevEvent) => ({
        ...prevEvent,
        start: new Date(start),
        end: new Date(end),
      }));
    },
    [setNewEvent, setIsDialogOpen]
  );

  const memoizedEvents = useMemo(
    () =>
      events.map((goodEvent) => ({
        ...goodEvent,
        start: new Date(goodEvent.start),
        end: new Date(goodEvent.end),
      })),
    [events]
  );

  const handleSelectEvent = useCallback((savedEvents) => {
    const { title, start, end } = savedEvents;
    const format = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const startFormatted = start.toLocaleString("en-US", format);
    const endFormatted = end.toLocaleString("en-US", format);
    const message = `Title: ${title}\nStart: ${startFormatted}\nEnd: ${endFormatted}`;
    window.alert(message);
  }, []);

  return (
    <EventDialogWrapper newEvent={newEvent}>
      <StyledMyCalendar
        localizer={localizer}
        events={memoizedEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        titleAccessor="title"
        defaultView={Views.MONTH}
      />

      {isDialogOpen && (
        <EventDialog
          setNewEvent={setNewEvent}
          newEvent={newEvent}
          addNewEvent={addNewEvent}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
      <Link href="./Shifts">Shifts</Link>
    </EventDialogWrapper>
  );
}
