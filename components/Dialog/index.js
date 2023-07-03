import MainDialog from "../MainDialog";
import EditShift from "../EditShift";

export default function ShiftDialog({
  shiftInfo,
  onClose,
  updateNewShiftsInfo,
}) {
  //use the onClose prop to handle the closeButton
  // const handleCloseButton = () => {
  //   onClose();
  // };

  return (
    <div>
      <MainDialog onClose={onClose}>
        <EditShift
          currentShiftInfo={shiftInfo}
          updateNewShiftsInfo={updateNewShiftsInfo}
          closeDialog={onClose}
        ></EditShift>
      </MainDialog>
    </div>
  );
}
