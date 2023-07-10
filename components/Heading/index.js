import styled from "styled-components";

export const StyledHeading = styled.h1`
  text-align: center;
  background-color: #f0ebe3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #576f72;
`;

export default function Heading() {
  return <StyledHeading>ShiftPro</StyledHeading>;
}
