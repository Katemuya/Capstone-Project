import MainDialog from "../MainDialog";
import EditShift from "../EditShift";

export default function ShiftDialog({
  shiftInfo,
  onClose,
  updateNewShiftsInfo,
  deleteShift,
  handleColorChange,
}) {
  return (
    <div>
      <MainDialog onClose={onClose}>
        <EditShift
          currentShiftInfo={shiftInfo}
          updateNewShiftsInfo={updateNewShiftsInfo}
          deleteShift={deleteShift}
          closeDialog={onClose}
          handleColorChange={handleColorChange}
        ></EditShift>
      </MainDialog>
    </div>
  );
}
