import React from "react";
import { FaSortDown } from "react-icons/fa6";

const AddRoomForm = () => {
  return (
    <div>
      <div className="m-[1rem] flex h-[37rem] w-[83rem] flex-col space-y-[1.5rem] border-[.1rem] border-[#dedede] p-[3rem]">
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Room No. / Name</span>
          <input
            type="text"
            placeholder="Enter Room No."
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Room Type</span>
          <div className="relative h-full w-[50%]">
            <select className="h-full w-full border-[.1rem] border-[#dedede] px-[1rem] text-[14px] text-gray-400">
              <option
                value=""
                disabled
                selected
                className="bg-[#CACACA] text-gray-400"
              >
                Select room
              </option>
              <option value="normal">Normal Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="super-deluxe">Super Deluxe Room</option>
            </select>
            <FaSortDown className="absolute right-1 top-2" />
          </div>
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Floor</span>
          <input
            type="text"
            placeholder="Enter floor no."
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">No. Of Beds</span>
          <input
            type="text"
            placeholder="Enter no. of beds"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
        </div>
        <div className="flex h-[10%] w-[80%] flex-row items-center">
          <span className="w-[22%] text-[21px]">Room Rate</span>
          <input
            type="text"
            placeholder="INR 0000.00"
            className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
            name=""
            id=""
          />
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

export default AddRoomForm;
