import React from "react";

const Attatchment = () => {
  return (
    <div>
      <div className="flex w-full flex-col p-4 font-lato text-[20px]/[24px] font-normal text-[#a4a3a3]">
        <span>Upload the mentioned files here </span>{" "}
        <span className="text-[18px]/[21.6px]">
          ( Accepted file types are jpg , jpeg , png , pdf, doc in max 25MB )
        </span>
      </div>
      <form className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal">
        <div className="flex w-[60%] required flex-row justify-between">
          <label className="block text-gray-700">Aadhar Card</label>
          <input
            type="file"
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="flex required w-[60%] flex-row justify-between">
          <label className="block text-gray-700">PAN Card </label>
          <input
            type="file"
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">Passport <span className="text-[9px]/[10.8px]">(Mandatory for International Patients)</span></label>
          <input
            type="file"
            className="flex w-[65%] rounded-sm border h-fit border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">VISA <span className="text-[9px]/[10.8px]">(Mandatory for International Patients)</span></label>
          <input
            type="file"
            className="flex w-[65%] h-fit rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="block text-gray-700">Referral Letter</label>
          <input
            type="file"
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">Last Prescription <span className="text-[9px]/[10.8px] text-[#a4a3a3]">(If referred patient)</span></label>
          <input
            type="file"
            className="flex w-[65%] rounded-sm border h-fit border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E] "
            required
          />
        </div>
        <div className="ml-[38.7%] flex h-10 w-fit flex-row items-center space-x-4">
          <button
            type="submit"
            className="w-30 h-[90%] rounded bg-[#FFB800] px-4 py-2 text-[16px]/[19.2px] font-normal text-black"
          >
            Save & Next
          </button>
          <button
            type="button"
            className="w-30 h-[90%] rounded border border-black bg-white px-4 py-2 text-[16px]/[19.2px] font-normal text-[#353434]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Attatchment;
