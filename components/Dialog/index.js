import styled from "styled-components";

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000010;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const DialogContent = styled.div`
  background-color: grey;
  padding: 0px;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  align-items: start;
  position: relative;
`;
//Style the close button
const CloseButton = styled.button`
  background-color: white;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 5px 10px;
  background-color: white;
  align-self: auto;
  font-weight: bold;
  cursor: pointer;
`;

export default function ShiftDialog({ onClose }) {
  //use the onClose prop to handle the closeButton
  const handleCloseButton = () => {
    onClose();
  };

  return (
    <div>
      <DialogWrapper>
        <DialogContent>
          <CloseButton onClick={handleCloseButton}>Close</CloseButton>
          <p>Very soon you will be able to edit your shift here</p>
        </DialogContent>
      </DialogWrapper>
    </div>
  );
}
