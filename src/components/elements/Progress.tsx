import React from "react";
import DetailsTable from "../tables/DetailsTable";

const Progress: React.FC = () => {
  const arr = [
    { name: "Date Time", width: "15%" },
    { name: "Progress", width: "18%" },
    { name: "Treatement", width: "27%" },
    { name: "Remakrs", width: "27%" },
    { name: "Prepared by", width: "12%" },
  ];
  // const arr=[
  //     {name:'Diagonosis',width:'24.5%'},
  //     {name:'Remarks',width:'24.5%'},
  //     {name:'Remarks',width:'29.5%'},
  //     {name:'Remarks',width:'19.5%'},
  // ];
  // const ghi = [
  //   {
  //     index: 1,
  //     remark: [
  //       { width: "0%", data: "" },
  //       { width: "0%", data: "" },
  //     ],
  //   },
  // ];
  return <DetailsTable name="progress" btntxt="+ Add progress" arr={arr} />;
};

export default Progress;
