import styled from "styled-components";
import { Button } from "../EditShift";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled(Button)`
  position: relative;
  right: 30px;
  background-color: #2596be;
  color: #ffffff;
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
  title,
  time,

  onEdit,
}) {
  return (
    <Container>
      <StyledShiftItem>
        <h3>{title}</h3>
        <p>{time}</p>
      </StyledShiftItem>

      <EditButton onClick={onEdit}>Edit</EditButton>
    </Container>
  );
}
