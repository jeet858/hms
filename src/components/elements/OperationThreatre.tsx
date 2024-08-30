import React from "react";
import DetailsTable from "../tables/DetailsTable";

const OperationTheatre: React.FC = () => {
  const arr = [
    { name: "Date", width: "10%" },
    { name: "Start Time", width: "16%" },
    { name: "End Time", width: "14%" },
    { name: "Operation Name", width: "16%" },
    { name: "Surgeon", width: "14%" },
    { name: "Assistant", width: "19%" },
    { name: "Action", width: "10%" },

    { name: "22-03-24", width: "10%" },
    { name: "10:30 AM", width: "16%" },
    { name: "12:30 PM", width: "14%" },
    { name: "Heart Surgery", width: "16%" },
    { name: "Dr. A Bose", width: "14%" },
    { name: "Dr. B Roy", width: "19%" },
    { name: " X ", width: "10%" },
  ];

  return (
    <DetailsTable
      name="Operation Theatre"
      btntxt="+ New OT Details"
      arr={arr}
    />
  );
};

export default OperationTheatre;
