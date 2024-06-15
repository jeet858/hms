import React from "react";

const OtherInfo = () => {
  return (
    <form className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal">
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Height (in cms)</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Weight (in Kgs)</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Blood Pressure</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Medical History</label>
        <textarea
          className=" block text-[12px]/[14.4px] text-[#958E8E] max-h-14 min-h-14 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        ></textarea>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Reference (if any)</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Allergies (if any)</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Primary / Last Physican</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Preferred Language</label>
        <input
          type="text"
          className=" block text-[12px]/[14.4px] text-[#958E8E] h-7 w-[65%] rounded-sm border border-gray-300 p-2"
          required
        />
      </div>
      <div className="flex h-10 flex-row items-center space-x-4 ml-[38.7%] w-fit">
        <button
          type="submit"
          className="bg-[#FFB800] w-30 h-[90%] text-[16px]/[19.2px] font-normal text-black py-2 px-4 rounded"
        >
          Save & Next
        </button>
        <button
          type="button"
          className="bg-white border h-[90%] border-black w-30 text-[#353434] text-[16px]/[19.2px] font-normal py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default OtherInfo;
