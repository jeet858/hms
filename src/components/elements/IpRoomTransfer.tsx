import React from "react";
import DetailsTable from "../tables/DetailsTable";

const IpRoomTransfer: React.FC = () => {
  const arr = [
    { name: "Date Time", width: "14%" },
    { name: "Room Category", width: "15%" },
    { name: "Floor", width: "12%" },
    { name: "Room Name", width: "15%" },
    { name: "Bed No.", width: "14%" },
    { name: "prepared by", width: "17%" },
    { name: "Action", width: "10%" },
  ];
  return (
    <DetailsTable name="IP Room Tranfer" btntxt="+ Tranfer Patient" header={arr} />
  );
};

export default IpRoomTransfer;
