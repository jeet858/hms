import React from "react";

const GeneralInfo: React.FC = () => {
  return (
    <div className="h-[40vh] rounded bg-[#f8eed6] shadow-md">
      <div className="ml-[10px] flex h-[15%] w-[18%] items-center justify-center border-t-[4px] border-[#287CC6] pb-2">
        <h2 className="font-sansation text-[18px] text-[#7E7E7E]">
          General Information
        </h2>
      </div>
      <div className="flex h-[80%] flex-col justify-between text-sm">
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">
            Admission Date
          </div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">
            Jun 10, 2024
          </div>
        </div>
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">
            Admission Time
          </div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">
            07:44:14 AM
          </div>
        </div>
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">In-Charge Doctor</div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">Pr. Dr. Md. Abdus Sobur</div>
        </div>
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">Department</div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">Cardiology</div>
        </div>
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">Room</div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">01</div>
        </div>
        <div className="flex h-[15%] flex-row justify-evenly">
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem] text-gray-600">Bed No.</div>
          <div className="flex h-full w-[48%] items-center bg-white pl-[.5rem]">10101</div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
