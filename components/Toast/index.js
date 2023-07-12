import styled from "styled-components";

const StyledToastWrapper = styled.div`
  position: absolute;
  background-color: red;
  top: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 50%;
  text-align: center;
  box-shadow: 0px 0px 20px #00000080;
  color: white;
`;
const StyledToastContent = styled.div``;
export default function SuccessToast({ show }) {
  return (
    <>
      {show && (
        <StyledToastWrapper>
          <StyledToastContent>Deleted </StyledToastContent>
        </StyledToastWrapper>
      )}
    </>
  );
}
