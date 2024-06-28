import React, { Dispatch, SetStateAction } from "react";
interface MedicalDetailsData {
  height: string;
  weight: string;
  bloodPressure: string;
  medicalHistory: string;
  reference: string;
  allergies: string;
  primaryPhysician: string;
  preferredLanguage: string;
}
interface IProps {
  data: MedicalDetailsData;
  setData: Dispatch<SetStateAction<MedicalDetailsData>>;
  saveAndNextClick: () => void;
}
const OtherInfo: React.FunctionComponent<IProps> = ({
  data,
  setData,
  saveAndNextClick,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
      className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal"
      onSubmit={handleSubmit}
    >
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Height (in cms)</label>
        <input
          type="number"
          name="height"
          value={data.height}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Weight (in Kgs)</label>
        <input
          type="number"
          name="weight"
          value={data.weight}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Blood Pressure</label>
        <input
          type="text"
          name="bloodPressure"
          value={data.bloodPressure}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Medical History</label>
        <textarea
          name="medicalHistory"
          value={data.medicalHistory}
          onChange={handleChange}
          className="block max-h-14 min-h-14 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        ></textarea>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Reference (if any)</label>
        <input
          type="text"
          name="reference"
          value={data.reference}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Allergies (if any)</label>
        <input
          type="text"
          name="allergies"
          value={data.allergies}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Primary / Last Physician</label>
        <input
          type="text"
          name="primaryPhysician"
          value={data.primaryPhysician}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Preferred Language</label>
        <input
          type="text"
          name="preferredLanguage"
          value={data.preferredLanguage}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
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
  );
};

export default OtherInfo;
