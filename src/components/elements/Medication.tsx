import React from "react";
import DetailsTable from "../tables/DetailsTable";

const Medication: React.FC = () => {
  const arr = [
    { name: "medicine", width: "25%" },
    { name: "instruction", width: "23%" },
    { name: "advice", width: "23%" },
    { name: "days", width: "8%" },
    { name: "qty", width: "8%" },
    { name: "prepared by", width: "12%" },
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
  return <DetailsTable name="Medication" btntxt="+ Add medication" arr={arr} />;
};

export default Medication;
