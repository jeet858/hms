import React from "react";
interface IndoorPatientProps {
  img: string;
  name: string;
  illness: string;
  visit: number;
}

const IndoorPatient: React.FC<IndoorPatientProps> = (props) => {
  return (
    <div className="trnasition-colors group flex h-[25%] w-[15.3%] flex-col rounded-[10px] pl-[10px] pt-[1rem] shadow-lg shadow-slate-400 duration-500 hover:bg-[#F4FDFF]">
      <div className="flex h-[36%] w-full flex-row items-center justify-between">
        <img src={props.img} className="h-[88%] w-[23%] rounded-full" alt="" />
        <div className="group-trnasition-colors flex h-[41%] w-[42%] items-center justify-center rounded-l-[20px] border-b-[2.5px] border-l-[2.5px] border-t-[2.5px] border-[#00738C] bg-white duration-500 group-hover:bg-[#00738C] group-hover:text-white">
          11:05AM
        </div>
      </div>
      <div className="flex h-[64%] w-full flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-[15px] font-extrabold">{props.name}</span>
          <span className="text-[14px] text-[#888888]">{props.illness}</span>
        </div>

        <div className="flex h-[32%] w-full flex-row justify-between pr-[10px]">
          <span className="text-[13px] text-[#888888]">
            Visited-{props.visit}
          </span>
          <span className="text-[13px] text-[#00738C]">New</span>
        </div>
      </div>
    </div>
  );
};
export default IndoorPatient;
