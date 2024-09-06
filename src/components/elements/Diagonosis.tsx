import React from "react";
import DetailsTable from "../tables/DetailsTable";
import DiagonosisPopup from "../popup/DiagonosisPopup";

const Diagonosis: React.FC = () => {
  const arr = [
    { name: "Diagonosis", width: "49.5%" },
    { name: "Remarks", width: "49.5%" },
  ];
  // const arr=[
  //     {name:'Diagonosis',width:'24.5%'},
  //     {name:'Remarks',width:'24.5%'},
  //     {name:'Remarks',width:'29.5%'},
  //     {name:'Remarks',width:'19.5%'},
  // ];
  // const ghi = [
  //   {
  //     index:1,
  //     remark: [
  //       {width:'49.5%',data:'Diagonosis'},
  //       {width:'49.5%',data:'Remarks'},
  //     ],
  //   },
  // ];
  return <DetailsTable name="Diagonosis" btntxt="+ Add diagnosis" header={arr} popup={<DiagonosisPopup/>}/>;
};

export default Diagonosis;
