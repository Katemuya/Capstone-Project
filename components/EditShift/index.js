import { useState } from "react";
import MainDialog from "../MainDialog";
import styled from "styled-components";
import ColorSlideChooser from "../ColorSlideChooser";

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

export const Button = styled.button`
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const DeleteButton = styled(Button)`
  background-color: red;
`;
const SaveButton = styled(Button)`
  background-color: #4caf50;
`;
export default function EditShift({
  currentShiftInfo,
  updateNewShiftsInfo,
  deleteShift,
  closeDialog,
}) {
  const [shiftInfo, setShiftInfo] = useState({
    id: currentShiftInfo.id,
    shiftName: currentShiftInfo.shiftName,
    start: currentShiftInfo.start,
    end: currentShiftInfo.end,
    color: currentShiftInfo.color,
  });

  const handleChange = (event) => {
    setShiftInfo({ ...shiftInfo, [event.target.name]: event.target.value });
  };

  const handleColorChange = (color) => {
    setShiftInfo({ ...shiftInfo, color: color });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNewShiftsInfo(shiftInfo);
    closeDialog();

    setShiftInfo({ shiftName: "", start: "", end: "", id: "" });
  };

  const handleDelete = () => {
    deleteShift(currentShiftInfo.id);
    closeDialog();
  };

  return (
    <MainDialog onClose={closeDialog}>
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

        <ColorSlideChooser
          onColorChange={handleColorChange}
        ></ColorSlideChooser>

        <ButtonContainer>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          <SaveButton>Save </SaveButton>
        </ButtonContainer>
      </StyledForm>
    </MainDialog>
  );
}
