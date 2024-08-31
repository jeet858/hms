import React from "react";
import DetailsTable from "~/components/tables/DetailsTable";

const PatientHistory: React.FC = () => {
  const arr = [
    { name: "Date Entry", width: "12%" },
    { name: "Allergies", width: "16%" },
    { name: "Warnings", width: "14%" },
    { name: "Family History", width: "16%" },
    { name: "Past Medical History", width: "20%" },
    { name: "Action", width: "19%" },
  ];

  return (
    <DetailsTable
      name="Patient History"
      btntxt="+ Add patient history"
      header={arr}
    />
  );
};

export default PatientHistory;
