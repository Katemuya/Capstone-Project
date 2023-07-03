//Set up data for mock shifts
const initialEvents = [
  {
    id: 0,
    title: "Morning Shift 🌅",
    start: new Date("2023-07-22T06:00"),
    end: new Date("2023-07-22T13:00"),
  },
  {
    id: 1,
    title: "Afternoon shift 🌞",
    start: new Date("2023-07-18T13:00"),
    end: new Date("2023-07-18T20:00"),
  },

  {
    id: 2,
    title: "Night Shift 🌙",
    allDay: true,
    start: new Date("2023-07-05T20:00"),
    end: new Date("2023-07-06T06:00"),
  },
  {
    id: 3,
    title: "Coffee date",
    allDay: false,
    start: new Date("2023-07-04T12:00:00.000Z"),
    end: new Date("2023-07-04T13:00:00.000Z"),
  },
  {
    id: 4,
    title: "Team Meeting",
    allDay: false,
    start: new Date("2023-07-04T16:00"),
    end: new Date("2023-07-04T17:00"),
  },
];
export default initialEvents;
