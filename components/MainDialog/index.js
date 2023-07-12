import styled from "styled-components";

export const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000010;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7ecde;
  position: relative;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  margin: 0 auto;
`;

//Style the close button
const CloseButton = styled.button`
  border: none;
  position: absolute;
  color: white;
  right: 0;
  top: 0;
  transform: translateX(-50%);
  margin: 0px;
  padding: 5px 5px;
  background-color: #464242;
  align-self: auto;
  font-weight: bold;
  cursor: pointer;
`;

export default function MainDialog({ children, onClose }) {
  //use the onClose prop to handle the closeButton
  const handleCloseButton = () => {
    onClose();
  };

  return (
    <div>
      <DialogWrapper>
        <DialogContent>
          <CloseButton onClick={handleCloseButton}>Close</CloseButton>
          {children}
        </DialogContent>
      </DialogWrapper>
    </div>
  );
}
