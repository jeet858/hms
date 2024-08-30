import React from "react";
import DetailsTable from "../tables/DetailsTable";

const IpRoomTransfer: React.FC = () => {
  const arr = [
    { name: "Date Time", width: "14%" },
    { name: "Room Category", width: "15%" },
    { name: "Floor", width: "13%" },
    { name: "Room Name", width: "15%" },
    { name: "Bed No.", width: "14%" },
    { name: "prepared by", width: "18%" },
    { name: "Action", width: "10%" },

    { name: "02-03-24", width: "14%" },
    { name: "aaaaa", width: "15%" },
    { name: "5", width: "13%" },
    { name: "yyy", width: "15%" },
    { name: "191919", width: "14%" },
    { name: "abc", width: "18%" },
    { name: " X ", width: "10%" },
  ];
  return (
    <DetailsTable name="IP Room Tranfer" btntxt="+ Tranfer Patient" arr={arr} />
  );
};

export default IpRoomTransfer;
