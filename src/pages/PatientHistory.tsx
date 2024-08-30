import React from "react";
import DetailsTable from "~/components/tables/DetailsTable";

const PatientHistory: React.FC = () => {
  const arr = [
    { name: "Date Entry", width: "12%" },
    { name: "Allergies", width: "16%" },
    { name: "Warnings", width: "14%" },
    { name: "Family History", width: "16%" },
    { name: "Past Medical History", width: "22%" },
    { name: "Action", width: "19%" },

    { name: "22-03-24", width: "12%" },
    { name: "antihistamines", width: "16%" },
    { name: "heart blockage", width: "14%" },
    { name: "diabetes", width: "16%" },
    { name: "rheumatic fever", width: "22%" },
    { name: " x ", width: "19%" },
  ];

  return (
    <DetailsTable
      name="Patient History"
      btntxt="+ Add patient history"
      arr={arr}
    />
  );
};

export default PatientHistory;
