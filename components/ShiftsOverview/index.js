import styled from "styled-components";
import Link from "next/link";
import { StyledHeading } from "../Heading";
import ShiftItem from "../ShiftItem";
import NewShifts from "../NewShifts";
import { useState } from "react";
import ShiftDialog from "../Dialog";
import { Button } from "../EditShift";
import SuccessToast from "../Toast";

const StyledShifts = styled.div`
  left: 30%;
  padding-top: 2em;
  align-content: center;
`;

const StyledContainer = styled.div`
  background-color: #e5e3c9;
  height: 90vh;
  width: 100%;
  overflow: scroll;
`;
const StyledCreateButton = styled(Button)`
  background-color: #3e8e7e;
  margin: 10px;
  &:hover {
    background-color: #ffc95f;
  }
`;
const StyledShiftsHeading = styled(StyledHeading)`
  background-color: #e5e3c9;
`;

export default function ShiftsOverview({ shiftsInfo, setShiftsInfo }) {
  const [isShiftDialogOpen, setIsShiftDialogOpen] = useState(false);
  const [isNewShiftDialogOpen, setIsNewShiftDialogOpen] = useState(false);
  const [selectedShiftId, setSelectedShiftId] = useState(null);
  const [showDeleteShiftToast, setShowDeleteShiftToast] = useState(false);
  //function to handle adding a new shift
  const handleAddShift = (newShift) => {
    setShiftsInfo((prevShiftsInfo) => [...prevShiftsInfo, newShift]);
  };
  console.log(shiftsInfo);
  //function to edit shifts
  const updateNewShiftsInfo = (updatedShiftInfo) => {
    setShiftsInfo(
      shiftsInfo.map((shiftInfo) => {
        return shiftInfo.id === updatedShiftInfo.id
          ? updatedShiftInfo
          : shiftInfo;
      })
    );
  };

  const deleteShift = (shiftId) => {
    // const confirmed = window.confirm(
    //   "Are you sure you want to delete this shift?"
    // );
    // if (confirmed) {
    const updatedShifts = shiftsInfo.filter((shift) => shift.id !== shiftId);
    setShiftsInfo(updatedShifts);
    setShowDeleteShiftToast(true);
    setTimeout(() => {
      setShowDeleteShiftToast(false);
    }, 2000);
    // }
  };
  return (
    <StyledContainer>
      <StyledShiftsHeading>My Shifts</StyledShiftsHeading>
      <StyledShifts>
        {shiftsInfo &&
          shiftsInfo.map((shiftInfo) => (
            <div key={shiftInfo.id}>
              <ShiftItem
                title={shiftInfo.shiftName}
                time={`${shiftInfo.start} - ${shiftInfo.end}`}
                selectedColor={shiftInfo.color}
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
            </div>
          ))}
        {isNewShiftDialogOpen && (
          <NewShifts
            handleAddShift={handleAddShift}
            closeDialog={() => setIsNewShiftDialogOpen(false)}
          ></NewShifts>
        )}
      </StyledShifts>
      <SuccessToast show={showDeleteShiftToast}></SuccessToast>
      <StyledCreateButton onClick={() => setIsNewShiftDialogOpen(true)}>
        Create Shift
      </StyledCreateButton>
    </StyledContainer>
  );
}
