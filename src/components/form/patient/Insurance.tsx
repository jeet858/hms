import React, { Dispatch, SetStateAction } from "react";

interface InsuranceInfoData {
  insuranceCompany: string;
  policyNo: string;
}
interface IProps {
  data: InsuranceInfoData;
  setData: Dispatch<SetStateAction<InsuranceInfoData>>;
  saveAndNextClick: () => void;
}

const Insurance: React.FunctionComponent<IProps> = ({
  data,
  saveAndNextClick,
  setData,
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
    <form className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal">
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Insurance Company</label>
        <select
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="insuranceCompany"
          value={data.insuranceCompany}
          onChange={handleChange}
        >
          <option value="">Select Insurance Company</option>
          <option value="Star Health">Star Health</option>
          <option value="Reliance">Reliance</option>
        </select>
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Policy Number</label>
        <input
          type="text"
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="policyNo"
          value={data.policyNo}
          onChange={handleChange}
        />
      </div>
      <div className="ml-[38.7%] flex h-10 w-fit flex-row items-center space-x-4">
        <button
          type="submit"
          className="w-30 h-[90%] rounded bg-[#FFB800] px-4 py-2 text-[16px]/[19.2px] font-normal text-black"
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

export default Insurance;
