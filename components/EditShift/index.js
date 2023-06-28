import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5em;
`;

const SaveSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function EditShift({
  currentShiftInfo,
  updateNewShiftsInfo,
  closeDialog,
}) {
  const [shiftInfo, setShiftInfo] = useState({
    id: currentShiftInfo.id,
    shiftName: currentShiftInfo.shiftName,
    start: currentShiftInfo.start,
    end: currentShiftInfo.end,
  });

  const handleChange = (event) => {
    setShiftInfo({ ...shiftInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNewShiftsInfo(shiftInfo);
    closeDialog();

    setShiftInfo({ name: "", start: "", end: "", id: "" });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        Shift Name:
        <Input
          type="text"
          name="shiftName"
          value={shiftInfo.shiftName}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Start:
        <Input
          type="time"
          name="start"
          placeholder="00:00"
          value={shiftInfo.start}
          onChange={handleChange}
        />
      </Label>
      <Label>
        End:
        <Input
          type="time"
          name="end"
          placeholder="00:00"
          value={shiftInfo.end}
          onChange={handleChange}
        />
      </Label>
      <SubmitButtonContainer>
        <SaveSubmitButton>Save </SaveSubmitButton>
      </SubmitButtonContainer>
    </StyledForm>
  );
}
