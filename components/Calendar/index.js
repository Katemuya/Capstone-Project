import { Calendar as MyCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import { useCallback, useMemo, useState } from "react";
import { Views } from "react-big-calendar";
import moment from "moment";
import Heading from "../Heading";
import EventDialog from "../EventDialog";
import { CSSTransition } from "react-transition-group";
import enUS from "date-fns/locale/en-US";
import { Button } from "../EditShift";
import DeleteEventDialogue from "../DeleteEventDialog";

const locales = {
  "en-US": enUS,
};

const localizer = momentLocalizer(moment);

const StyledPage = styled.div`
  width: 100%;
  height: 90vh;
  overflow: scroll;
  background-color: #f0ebe3;
  padding: 20px;
`;
const EventDialogWrapper = styled.div`
  height: 85%;
  .rbc-calendar {
    background-color: #f0ebe3;
    margin: 10px;
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

const PaintRow = styled.div`
  display: flex;
  overflow: scroll;
  flex-wrap: nowrap;
  white-space: nowrap;
  flex-direction: row;
`;

const StyledPaintButton = styled(Button)`
  background-color: #898121;
  height: 50px;
  font-size: px;
`;
const PaintEvent = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  margin: 2px;
  aspect-ratio: 1;
  border-radius: 100%;
  border: ${(props) => (props.selected ? "3px solid black" : "none")};
`;

const Row = styled.div`
  display: flex;
  overflow: scroll;
  flex-wrap: nowrap;
  white-space: nowrap;
  flex-direction: row;
`;

export default function Calendar({ events, setEvents, shiftsInfo }) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [shiftPaint, setShiftPaint] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [showPaintRow, setShowPaintRow] = useState(false);

  const addNewEvent = useCallback(() => {
    setEvents([...events, newEvent]);
  }, [events, newEvent, setEvents]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const newEventID = Math.random().toString(36).substring(2, 9);

      if (shiftPaint == null) {
        setIsDialogOpen(true);

        setNewEvent((prevEvent) => ({
          ...prevEvent,
          start: new Date(start),
          end: new Date(end),
          id: newEventID,
        }));
      } else {
        const createdPaintEvent = {
          title: shiftPaint.shiftName,
          start: new Date(start),
          end: new Date(end),
          color: shiftPaint.color,
          id: newEventID,
        };

        setEvents([...events, createdPaintEvent]);
      }
    },
    [setNewEvent, setIsDialogOpen, shiftPaint, setEvents, events]
  );

  const [eventIDToBeDeleted, setEventIDTobeDeleted] = useState(-1);

  const deleteEvent = () => {
    setIsDeleteDialogOpen(false);
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmed) {
      const updatedEvents = events.filter(
        (event) => event.id !== eventIDToBeDeleted
      );
      setEvents(updatedEvents);
      alert("shift deleted successfully");
    }
  };

  const onShiftSelected = useCallback((newShiftPaint) => {
    console.log(newShiftPaint);
    setShiftPaint(newShiftPaint);
  }, []);

  const memoizedEvents = useMemo(
    () =>
      events.map((goodEvent) => ({
        ...goodEvent,
        start: new Date(goodEvent.start),
        end: new Date(goodEvent.end),
      })),
    [events]
  );
  const [deleteMessage, setDeleteMessage] = useState("");
  const handleSelectEvent = useCallback((savedEvents) => {
    const { title, start, end, id } = savedEvents;
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
    const message = `Title: ${title}\nStart:${startFormatted}\nEnd: ${endFormatted}`;
    setDeleteMessage(message);
    setIsDeleteDialogOpen(true);
    setEventIDTobeDeleted(id);
  }, []);

  return (
    <StyledPage>
      <Heading>Calendly</Heading>
      <EventDialogWrapper newEvent={newEvent}>
        <MyCalendar
          localizer={localizer}
          events={memoizedEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          titleAccessor="title"
          defaultView={Views.MONTH}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "#666666",
              color: "black",
              borderRadius: "3px",
              border: "none",
            };

            if (event.color != null) {
              newStyle.backgroundColor = event.color;
            }

            return {
              className: "",
              style: newStyle,
            };
          }}
        />

        {isDialogOpen && (
          <EventDialog
            setNewEvent={setNewEvent}
            newEvent={newEvent}
            addNewEvent={addNewEvent}
            onClose={() => setIsDialogOpen(false)}
          />
        )}

        {isDeleteDialogOpen && (
          <DeleteEventDialogue
            onClose={() => setIsDeleteDialogOpen(false)}
            message={deleteMessage}
            deleteEvent={deleteEvent}
          />
        )}

        <Row>
          <StyledPaintButton
            onClick={() => {
              setShowPaintRow((prev) => {
                if (prev) {
                  setShiftPaint(null);
                }
                return !prev;
              });
            }}
          >
            Paint
          </StyledPaintButton>
          <CSSTransition
            in={showPaintRow}
            timeout={300}
            unmountOnExit
            classNames="paint-row"
          >
            <PaintRow>
              {shiftsInfo.map((shiftInfo) => {
                const selected = shiftInfo == shiftPaint;
                return (
                  <PaintEvent
                    key={shiftInfo}
                    color={shiftInfo.color}
                    onClick={() => {
                      if (selected) {
                        onShiftSelected(null);
                      } else {
                        onShiftSelected(shiftInfo);
                      }
                    }}
                    selected={selected}
                  ></PaintEvent>
                );
              })}
            </PaintRow>
          </CSSTransition>
        </Row>
      </EventDialogWrapper>
    </StyledPage>
  );
}
