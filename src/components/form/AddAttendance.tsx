import React from "react";

import { FaSortDown } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const AddAttendance = () => {
  return (
    <div>
      <div className="relative m-[1rem] flex h-[37rem] w-[83rem] flex-col space-y-[1.5rem] border-[.1rem] border-[#dedede] p-[3rem]">
        <button className="absolute right-3 top-3 flex h-[8%] w-[14%] items-center justify-center rounded-sm border-[2px] border-[#006B82] text-[#006B82]">
          Get Report
        </button>
        <div className="relative flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Employee ID</span>
          <input
            type="text"
            placeholder="Select ID"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
          <FaSortDown className="absolute right-[18rem] top-3" />
        </div>
        <div className="relative flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Employee Name</span>
          <input
            type="text"
            placeholder="Select Name"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
          <FaSortDown className="absolute right-[18rem] top-3" />
        </div>
        <div className="relative flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Date</span>
          <input
            type="text"
            placeholder="Select Date"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
          <FaRegCalendarAlt className="absolute right-[18rem] top-3" />
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">In Time</span>
          <input
            type="text"
            placeholder="00-00"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Out Time</span>
          <input
            type="text"
            placeholder="00-00"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
        </div>
        <div className="relative flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Place</span>
          <input
            type="text"
            placeholder="Select Place"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
          <FaSortDown className="absolute right-[18rem] top-3" />
        </div>
        <div className="flex h-[11%] w-full items-center justify-center">
          <div className="flex h-full w-[35%] flex-row justify-between">
            <button className="flex h-full w-[45%] items-center justify-center bg-[#FFB800] text-[19px]">
              Save
            </button>
            <button className="flex h-full w-[45%] items-center justify-center border-[.1rem] border-[#CACACA] text-[19px]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;
