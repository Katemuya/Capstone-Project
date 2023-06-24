import styled from "styled-components";
import ShiftDialog from "../Dialog";
import Link from "next/link";
import { useState } from "react";

const StyledShifts = styled.div`
  left: 30%;
`;
const EditButton = styled.button`
  position: absolute;
  right: 30%;
`;

export default function ShiftsOverview() {
  //Define useState for both the edit and close buttons
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //Toggle the edit button
  const handleToggleEdit = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  //define the shifts under ShiftItem
  const ShiftItem = ({ title, time }) => (
    <div>
      <EditButton onClick={handleToggleEdit}>Edit</EditButton>
      {isDialogOpen && <ShiftDialog onClose={() => setIsDialogOpen(false)} />}
      <div>
        <h3>{title}</h3>
        <p>{time}</p>
      </div>
    </div>
  );
  return (
    <StyledShifts>
      <ul>
        <h1>My Shifts</h1>
        <ShiftItem title="Morning Shift" time="(6:00- 14:00)" />
        <ShiftItem title="Afternoon Shift" time="(14:00- 20:00)" />
        <ShiftItem title="Night Shift" time="(20:00- 06:00)" />
        <ShiftItem title="Other" time="(8:00- 4:00)" />
      </ul>
      <Link href="./"> Back to Calendar </Link>
    </StyledShifts>
  );
}
