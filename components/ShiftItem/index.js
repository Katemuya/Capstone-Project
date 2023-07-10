import styled from "styled-components";
import { Button } from "../EditShift";

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h4`
  margin: 0;
`;

const StyledTime = styled.p`
  margin: 0;
`;

export default function ShiftItem({ title, time, onEdit, selectedColor }) {
  const ColorButton = styled(Button)`
    color: black;
    padding: 5px 10px;
    background-color: ${(props) => props.selectedColor};
    width: 40px;
    height: 40px;
  `;
  return (
    <ContentContainer>
      <StyledShiftItem>
        <ColorButton selectedColor={selectedColor}></ColorButton>
        <TitleContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledTime>{time}</StyledTime>
        </TitleContainer>
      </StyledShiftItem>

      <EditButton onClick={onEdit}>Edit</EditButton>
    </ContentContainer>
  );
}
