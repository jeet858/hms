import React from "react";
import DetailsTable from "../tables/DetailsTable";

const NurseProgressNote: React.FC = () => {
  const arr = [
    { name: "Date Time", width: "17%" },
    { name: "Focus", width: "30%" },
    { name: "Notes", width: "30%" },
    { name: "Prepared By", width: "22%" },
  ];
  return (
    <DetailsTable name="Nurse progress note" btntxt="+ Add note" arr={arr} />
  );
};

export default NurseProgressNote;
