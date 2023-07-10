// import SubHeading from "../components/SubHeading";
import Calendar from "../components/Calendar";
import NavigationBar from "../components/NavigationBar";

export default function Home({ events, setEvents, shiftsInfo, setShiftsInfo }) {
  return (
    <main>
      {/* <SubHeading></SubHeading> */}
      <Calendar
        events={events}
        shiftsInfo={shiftsInfo}
        setShiftsInfo={setShiftsInfo}
        setEvents={setEvents}
      />
      <NavigationBar />
    </main>
  );
}
