import React, { Dispatch, SetStateAction } from "react";

interface NurseContactDetailsData {
  nurseaddress1: string;
  nurseaddress2: string;
  nursecity: string;
  nursecontactNumber: string;
  nurseemergencyContact: string;
  nurseguardianName: string;
  nurserelation: string;
  nurseemailAddress: string;
}

interface IProps {
  data: NurseContactDetailsData;
  setData: Dispatch<SetStateAction<NurseContactDetailsData>>;
  saveAndNextClick: () => void;
}

const NurseContact: React.FC<IProps> = ({
  data,
  setData,
  saveAndNextClick,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveAndNextClick();
    console.log(data);
  };

  return (
    <form
      className="space-y-[0.7%] p-4 font-lato text-[19px]/[24px] font-normal"
      onSubmit={handleSubmit}
    >
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Address 1</label>
        <input
          type="text"
          name="address1"
          value={data.nurseaddress1}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Address 2</label>
        <input
          type="text"
          name="address2"
          value={data.nurseaddress2}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">City</label>
        <input
          name="city"
          value={data.nursecity}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Contact Number</label>
        <input
          type="number"
          name="contactNumber"
          value={data.nursecontactNumber}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Emergency Contact</label>
        <input
          type="number"
          name="emergencyContact"
          value={data.nurseemergencyContact}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Guardian’s Name</label>
        <input
          type="text"
          name="guardianName"
          value={data.nurseguardianName}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Relation</label>
        <input
          type="text"
          name="relation"
          value={data.nurserelation}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          name="emailAddress"
          value={data.nurseemailAddress}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="ml-[38.7%] flex h-10 w-fit flex-row items-center space-x-4">
        <button
          className="w-30 h-[90%] rounded bg-[#FFB800] px-4 py-2 text-[16px]/[19.2px] font-normal text-black"
          type="submit"
          onClick={handleSubmit}
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
  );
};

export default NurseContact;
