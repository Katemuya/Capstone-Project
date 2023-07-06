import styled from "styled-components";
import Link from "next/link";

import ShiftItem from "../ShiftItem";
import NewShifts from "../NewShifts";
import { useState } from "react";
import ShiftDialog from "../Dialog";
import { Button } from "../EditShift";

const StyledShifts = styled.div`
  left: 30%;
`;
const CreateButton = styled(Button)`
  background-color: #f2be22;
  &:hover {
    background-color: #ffc95f;
  }
`;

export default function ShiftsOverview({ shiftsInfo, setShiftsInfo }) {
  const handleAddShift = (newShift) => {
    setShiftsInfo([...shiftsInfo, newShift]);
  };

  const updateNewShiftsInfo = (updatedShiftInfo) => {
    setShiftsInfo(
      shiftsInfo.map((shiftInfo) => {
        return shiftInfo.id === updatedShiftInfo.id
          ? updatedShiftInfo
          : shiftInfo;
      })
    );
  };

  const [isShiftDialogOpen, setIsShiftDialogOpen] = useState(false);
  const [isNewShiftDialogOpen, setIsNewShiftDialogOpen] = useState(false);
  const [selectedShiftId, setSelectedShiftId] = useState(null);

  const deleteShift = (shiftId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this shift?"
    );
    if (confirmed) {
      const updatedShifts = shiftsInfo.filter((shift) => shift.id !== shiftId);
      setShiftsInfo(updatedShifts);
      alert("shift deleted successfully");
    }
  };
  return (
    <StyledShifts>
      {shiftsInfo &&
        shiftsInfo.map((shiftInfo) => (
          <div key={shiftInfo.id}>
            <ShiftItem
              title={shiftInfo.shiftName}
              time={`${shiftInfo.start} - ${shiftInfo.end}`}
              onEdit={() => {
                setIsShiftDialogOpen(true);
                setSelectedShiftId(shiftInfo.id);
              }}
            ></ShiftItem>

            {isShiftDialogOpen && selectedShiftId === shiftInfo.id && (
              <ShiftDialog
                shiftInfo={shiftInfo}
                updateNewShiftsInfo={updateNewShiftsInfo}
                deleteShift={deleteShift}
                onClose={() => {
                  setIsShiftDialogOpen(false);
                  setSelectedShiftId(null);
                }}
              ></ShiftDialog>
            )}

            {isNewShiftDialogOpen && (
              <NewShifts
                handleAddShift={handleAddShift}
                closeDialog={() => setIsNewShiftDialogOpen(false)}
              ></NewShifts>
            )}
          </div>
        ))}
      <div>
        <CreateButton onClick={() => setIsNewShiftDialogOpen(true)}>
          Create Shift
        </CreateButton>
      </div>

      <Link href="./"> Back to Calendar </Link>
    </StyledShifts>
  );
}
