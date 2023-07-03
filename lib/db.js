//Set up data for mock shifts
const events = [
  {
    id: 0,
    title: "Morning Shift 🌅",
    start: new Date(2023, 5, 22, 6, 0), // year, month (0-based), day, hour, minute
    end: new Date(2023, 5, 22, 13, 0),
  },
  {
    id: 1,
    title: "Afternoon shift 🌞",
    start: new Date(2023, 5, 23, 13, 0),
    end: new Date(2023, 5, 23, 20, 0),
  },

  {
    id: 3,
    title: "Night Shift 🌙",
    allDay: true,
    start: new Date(2023, 5, 20, 20, 0),
    end: new Date(2023, 5, 21, 6, 0),
  },
];
export default events;
