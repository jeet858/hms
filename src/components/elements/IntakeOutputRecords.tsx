import React from "react";
import DetailsTable from "../tables/DetailsTable";
const IntakeOutputRecords: React.FC = () => {
    const arr1 = [
      { name: "date Time", width: "10%" },
      { name: "Particulars", width: "17%" },
      { name: "I/V Fluid (ML)", width: "14%" },
      { name: "Oral (ML)", width: "10%" },
      { name: "Freq. Of Stool", width: "14%" },
      { name: "Freq. Of Urine", width: "14%" },
      { name: "Prepared By", width: "20%" },
    ];
     const arr2 = [
       { name: "Date Time", width: "13%" },
       { name: "Urine (ML)", width: "17%" },
       { name: "Feaces (ML)", width: "17%" },
       { name: "Respiration (ML)", width: "17%" },
       { name: "Skin (ML)", width: "13%" },
       { name: "prepared by", width: "20%" },
     ];
  return (
    // <div className="flex h-[60vh] w-full flex-col justify-between bg-white">
    //   <div className="flex h-[25%] w-full flex-col space-y-[1rem] bg-[#f8eed6] px-[.5rem] pb-[.5rem]">
    //     <div className="flex h-[40%] w-full flex-row justify-between">
    //       <span className="flex h-full items-center border-t-[4px] border-[#287CC6] text-[22px] text-[#7E7E7E]">
    //         Intake Records
    //       </span>
    //       <button className="flex h-full items-center text-[19px] text-[#7E7E7E]">
    //         + Add intake records
    //       </button>
    //     </div>
    //     <div className="mx-auto flex h-[28%] w-full flex-row justify-between">
    //       <div className="flex h-full w-[11%] items-center bg-white pl-[.5rem]">
    //         Date Time{" "}
    //       </div>
    //       <div className="flex h-full w-[17%] items-center bg-white pl-[.5rem]">
    //         Particulars
    //       </div>
    //       <div className="flex h-full w-[15%] items-center bg-white pl-[.5rem]">
    //         I/V Fluids (ML)
    //       </div>
    //       <div className="flex h-full w-[10%] items-center bg-white pl-[.5rem]">
    //         Oral (ML)
    //       </div>
    //       <div className="flex h-full w-[12%] items-center bg-white pl-[.5rem]">
    //         Freq. Of Stool
    //       </div>
    //       <div className="flex h-full w-[12%] items-center bg-white pl-[.5rem]">
    //         Freq. Of Urine
    //       </div>
    //       <div className="flex h-full w-[20%] items-center bg-white pl-[.5rem]">
    //         Prepared By
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex h-[25%] w-full flex-col space-y-[1rem] bg-[#f8eed6] px-[.5rem] pb-[.5rem]">
    //     <div className="flex h-[40%] w-full flex-row justify-between">
    //       <span className="flex h-full items-center border-t-[4px] border-[#287CC6] text-[22px] text-[#7E7E7E]">
    //         Output Records
    //       </span>
    //       <button className="flex h-full items-center text-[19px] text-[#7E7E7E]">
    //         + Add output records
    //       </button>
    //     </div>
    //     <div className="mx-auto flex h-[28%] w-full flex-row justify-between">
    //       <div className="flex h-full w-[13%] items-center bg-white pl-[.5rem]">
    //         Date Time
    //       </div>
    //       <div className="flex h-full w-[17%] items-center bg-white pl-[.5rem]">
    //         Urine (ML)
    //       </div>
    //       <div className="flex h-full w-[17%] items-center bg-white pl-[.5rem]">
    //         Feaces (ML)
    //       </div>
    //       <div className="flex h-full w-[17%] items-center bg-white pl-[.5rem]">
    //         Respiration (ML)
    //       </div>
    //       <div className="flex h-full w-[13%] items-center bg-white pl-[.5rem]">
    //         Skin (ML)
    //       </div>
    //       <div className="flex h-full w-[20%] items-center bg-white pl-[.5rem]">
    //         Prepared By
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex h-[60vh] w-full flex-col justify-between">
      <DetailsTable name="Intake Records" btntxt="+ Add intake records" arr={arr1} />
      <DetailsTable name="Output Records" btntxt="+ Add output records" arr={arr2} />
    </div>
  );
};
export default IntakeOutputRecords;
