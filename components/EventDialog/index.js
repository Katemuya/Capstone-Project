import MainDialog from "../MainDialog";
import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format } from "date-fns";

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

const formatDateTime = (dateTime) => format(dateTime, "yyyy-MM-dd'T'HH:mm");

export default function EventDialog({
  onClose,
  setNewEvent,
  newEvent,
  addNewEvent,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
    if (name === "start" || name === "end") {
      parsedValue = new Date(value);
    }
    setNewEvent({ ...newEvent, [name]: parsedValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewEvent(newEvent);
    onClose();
  };
  return (
    <MainDialog onClose={onClose}>
      <StyledForm onSubmit={handleSubmit}>
        <Label>
          Event:
          <Input
            type="text"
            name="title"
            value={newEvent.shiftName}
            onChange={handleChange}
          />
        </Label>

        {/* The code below shall be used later */}
        <Label>
          Start:
          <Input
            type="datetime-local"
            name="start"
            value={formatDateTime(newEvent.start)}
            onChange={handleChange}
          />
        </Label>

        <Label>
          End:
          <Input
            type="datetime-local"
            name="end"
            value={formatDateTime(newEvent.end)}
            onChange={handleChange}
          />
        </Label>

        <SubmitButtonContainer>
          <SaveSubmitButton>Save </SaveSubmitButton>
        </SubmitButtonContainer>
      </StyledForm>
    </MainDialog>
  );
}
