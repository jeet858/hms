import React from "react";
import DetailsTable from "../tables/DetailsTable";

const OperationTheatre: React.FC = () => {
  const arr = [
    { name: "Date", width: "10%" },
    { name: "Start Time", width: "16%" },
    { name: "End Time", width: "14%" },
    { name: "Operation Name", width: "16%" },
    { name: "Surgeon", width: "14%" },
    { name: "Assistant", width: "17%" },
    { name: "Action", width: "10%" },
  ];

  return (
    <DetailsTable
      name="Operation Theatre"
      btntxt="+ New OT Details"
      header={arr}
    />
  );
};

export default OperationTheatre;
