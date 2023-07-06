import MainDialog from "../MainDialog";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5em;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;

  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SaveButton = styled(Button)`
  background-color: #4caf50;
`;

export default function NewShifts({ handleAddShift, closeDialog }) {
  const [newShift, setNewShift] = useState({
    id: "",
    shiftName: "",
    start: "",
    end: "",
  });

  const handleChange = (event) => {
    setNewShift({ ...newShift, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newShiftId = Math.random().toString(36).substring(2, 9);

    const shiftToAdd = {
      id: newShiftId,
      shiftName: newShift.shiftName,
      start: newShift.start,
      end: newShift.end,
    };

    handleAddShift(shiftToAdd);

    setNewShift({ id: "", shiftName: "", start: "", end: "" });
    closeDialog();
  };

  return (
    <>
      <MainDialog onClose={closeDialog}>
        <StyledForm onSubmit={handleSubmit}>
          <Label>
            Shift Name:
            <Input
              type="text"
              name="shiftName"
              value={newShift.shiftName}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Start:
            <Input
              type="time"
              name="start"
              placeholder="00:00"
              value={newShift.start}
              onChange={handleChange}
            />
          </Label>
          <Label>
            End:
            <Input
              type="time"
              name="end"
              placeholder="00:00"
              value={newShift.end}
              onChange={handleChange}
            />
          </Label>
          <ButtonContainer>
            <SaveButton>Add Shift </SaveButton>
          </ButtonContainer>
        </StyledForm>
      </MainDialog>
    </>
  );
}
