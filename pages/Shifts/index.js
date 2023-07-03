import ShiftsOverview from "../../components/ShiftsOverview";
import { useState } from "react";

export default function Shifts() {
  //create an array to store the form data
  const [shiftFormData, addShiftFormData] = useState([]);

  const addNewShiftInfo = (shiftFormInfo) => {
    addShiftFormData([...shiftFormData, shiftFormInfo]);
  };

  return (
    <>
      <ShiftsOverview
        addNewShiftInfo={addNewShiftInfo}
        shiftFormData={shiftFormData}
      />
    </>
  );
}
