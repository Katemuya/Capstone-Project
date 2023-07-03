import Heading from "../components/Heading";
// import SubHeading from "../components/SubHeading";
import Calendar from "../components/Calendar";

export default function Home({ events, setEvents, shiftsInfo, setShiftsInfo }) {
  return (
    <main>
      <Heading>My Calendar</Heading>
      {/* <SubHeading></SubHeading> */}
      <Calendar
        events={events}
        shiftsInfo={shiftsInfo}
        setShiftsInfo={setShiftsInfo}
        setEvents={setEvents}
      />
    </main>
  );
}
