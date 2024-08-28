import React from 'react'
import DetailsTable from '../tables/DetailsTable'

const Diagonosis:React.FC = () => {
    const arr=[
        {name:'Diagonosis',width:'49.5%'},
        {name:'Remarks',width:'49.5%'},
    ];
    // const arr=[
    //     {name:'Diagonosis',width:'24.5%'},
    //     {name:'Remarks',width:'24.5%'},
    //     {name:'Remarks',width:'29.5%'},
    //     {name:'Remarks',width:'19.5%'},
    // ];
    const ghi = [
      {
        index:1,
        remark: [
          {width:'49.5%',data:'Diagonosis'},
          {width:'49.5%',data:'Remarks'},
        ],
      },
      {
        index:2,
        remark: [
          {width:'49.5%',data:'Diagonosis'},
          {width:'49.5%',data:'Remarks'},
        ],
      },
      {
        index:3,
        remark: [
          {width:'49.5%',data:'Diagonosis'},
          {width:'49.5%',data:'Remarks'},
        ],
      },
      {
        index:4,
        remark: [
          {width:'49.5%',data:'Diagonosis'},
          {width:'49.5%',data:'Remarks'},
        ],
      },
      {
        index:5,
        remark: [
          {width:'49.5%',data:'Diagonosis'},
          {width:'49.5%',data:'Remarks'},
        ],
      },
    ];
  return (
    <DetailsTable dataarr={ghi} name='Diagonosis' btntxt='+ Add diagnosis' arr={arr}/>
  )
}

export default Diagonosis
