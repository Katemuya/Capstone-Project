import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import ShiftItem from "../ShiftItem";

const StyledShifts = styled.div`
  left: 30%;
`;

const initialShiftsInfo = [
  {
    id: 0,
    shiftName: "Morning Shift 🌅",
    start: "00:00",
    end: "00:00",
  },
  {
    id: 1,
    shiftName: "Afternoon shift 🌞",
    start: "00:00",
    end: "00:00",
  },

  {
    id: 3,
    shiftName: "Night Shift 🌙",
    start: "00:00",
    end: "00:00",
  },
];
export default function ShiftsOverview({ shiftFormData }) {
  //Define useState for both the edit and close buttons
  const [shiftsInfo, setShiftsInfo] = useState(initialShiftsInfo);
  //Toggle the edit button

  const updateNewShiftsInfo = (updatedShiftInfo) => {
    console.log(updatedShiftInfo);
    // console.log(shiftsInfo[0]);
    setShiftsInfo(
      shiftsInfo.map((shiftInfo) => {
        return shiftInfo.id === updatedShiftInfo.id
          ? updatedShiftInfo
          : shiftInfo;
      })
    );
  };

  return (
    <StyledShifts>
      {shiftsInfo.map((shiftInfo) => (
        <div key={shiftInfo.id}>
          <ShiftItem
            shiftInfo={shiftInfo}
            title={shiftInfo.shiftName}
            time={`${shiftInfo.start} - ${shiftInfo.end}`}
            updateNewShiftsInfo={updateNewShiftsInfo}
          ></ShiftItem>
        </div>
      ))}

      <Link href="./"> Back to Calendar </Link>
    </StyledShifts>
  );
}
