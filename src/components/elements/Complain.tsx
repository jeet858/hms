import React from "react";
import DetailsTable from "../tables/DetailsTable";

const Complain: React.FC = () => {
  const arr = [
    { name: "Complain", width: "49.5%" },
    { name: "Remarks", width: "49.5%" },
  ];
  // const arr=[
  //     {name:'Diagonosis',width:'24.5%'},
  //     {name:'Remarks',width:'24.5%'},
  //     {name:'Remarks',width:'29.5%'},
  //     {name:'Remarks',width:'19.5%'},
  // ];
  return <DetailsTable name="Complain" btntxt="+ Add complain" arr={arr} />;
};

export default Complain;
