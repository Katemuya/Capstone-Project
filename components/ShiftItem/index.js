import styled from "styled-components";
import { useState } from "react";
import ShiftDialog from "../Dialog";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.div`
  position: relative;
  right: 30px;
  padding: 8px 16px;
  background-color: #2596be;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  /* Hover effect */
  &:hover {
    background-color: #145369;
  }
`;

const StyledShiftItem = styled.div`
  position: relative;
  left: 0;
`;

export default function ShiftItem({
  shiftInfo,
  title,
  time,
  updateNewShiftsInfo,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleEdit = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <Container>
      <StyledShiftItem>
        <h3>{title}</h3>
        <p>{time}</p>
      </StyledShiftItem>

      <EditButton onClick={handleToggleEdit}>Edit</EditButton>
      {isDialogOpen && (
        <ShiftDialog
          shiftInfo={shiftInfo}
          updateNewShiftsInfo={updateNewShiftsInfo}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </Container>
  );
}
