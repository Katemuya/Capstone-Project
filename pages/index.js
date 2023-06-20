import Heading from "../components/Heading";
// import SubHeading from "../components/SubHeading";
import Calendar from "../components/Calendar";
import events from "../lib/db";

export default function Home() {
  return (
    <main>
      <Heading>My Calendar</Heading>
      {/* <SubHeading></SubHeading> */}
      <Calendar events={events} />
    </main>
  );
}
