import MainDialog from "../MainDialog";
import EditShift from "../EditShift";

export default function ShiftDialog({
  shiftInfo,
  onClose,
  updateNewShiftsInfo,
  deleteShift,
}) {
  return (
    <div>
      <MainDialog onClose={onClose}>
        <EditShift
          currentShiftInfo={shiftInfo}
          updateNewShiftsInfo={updateNewShiftsInfo}
          deleteShift={deleteShift}
          closeDialog={onClose}
        ></EditShift>
      </MainDialog>
    </div>
  );
}
