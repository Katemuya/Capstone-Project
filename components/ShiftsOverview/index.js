import styled from "styled-components";
import Link from "next/link";

import ShiftItem from "../ShiftItem";

const StyledShifts = styled.div`
  left: 30%;
`;

export default function ShiftsOverview({ shiftsInfo, setShiftsInfo }) {
  const updateNewShiftsInfo = (updatedShiftInfo) => {
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
      {shiftsInfo &&
        shiftsInfo.map((shiftInfo) => (
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
