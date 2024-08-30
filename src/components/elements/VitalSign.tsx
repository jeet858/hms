import React from "react";
import DetailsTable from "../tables/DetailsTable";

const VitalSign: React.FC = () => {
  const arr = [
    { name: "Date Time", width: "10%" },
    { name: "Pulse Rate", width: "11%" },
    { name: "Temperature", width: "13%" },
    { name: "Height", width: "10%" },
    { name: "BP", width: "10%" },
    { name: "Respiration", width: "13%" },
    { name: "Weight", width: "13%" },
    { name: "prepared by", width: "18%" },
  ];
  return <DetailsTable name="Vital Sign" btntxt="+ Add vital sign" arr={arr} />;
};

export default VitalSign;
