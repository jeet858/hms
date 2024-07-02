import React, { Dispatch, SetStateAction } from "react";

interface NurseDocumentUploadForm {
  nurseimage: File|null;
  nurseaadharCard: File | null;
  nursepanCard: File | null;
  nursepassport: File | null;
  nursecertificate1: File | null;
  nursecertificate2: File | null;
  nursecertificate3: File | null;
}
interface Iprops {
  data: NurseDocumentUploadForm;
  setData: Dispatch<SetStateAction<NurseDocumentUploadForm>>;
  saveAndNextClick: () => void;
}

const NurseAttatchment:React.FC<Iprops> = ({data,setData,saveAndNextClick}) => {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
    console.log(data);
  };

  return (
    <div>
      <div className="flex w-full flex-col p-4 font-lato text-[19px]/[24px] font-normal text-[#a4a3a3]">
        <span>Upload the mentioned files here</span>
        <span className="text-[18px]/[21.6px]">
          ( Accepted file types are jpg, jpeg, png, pdf in max 25MB )
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal"
      >
        <div className="required flex w-[60%] flex-row justify-between">
          <label className="block text-gray-700">Passport Size Photo</label>
          <input
            type="file"
            name="aadharCard"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="required flex w-[60%] flex-row justify-between">
          <label className="block text-gray-700">Aadhar Card</label>
          <input
            type="file"
            name="aadharCard"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="required flex w-[60%] flex-row justify-between">
          <label className="block text-gray-700">PAN Card</label>
          <input
            type="file"
            name="panCard"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">
            Passport{" "}
          </label>
          <input
            type="file"
            name="passport"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex h-fit w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">
            Certificate 1 
          </label>
          <input
            type="file"
            name="visa"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex h-fit w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="block text-gray-700">Certificate 2</label>
          <input
            type="file"
            name="referralLetter"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
          />
        </div>
        <div className="flex w-[60%] flex-row justify-between">
          <label className="flex flex-col text-gray-700">
            Certificate 3
          </label>
          <input
            type="file"
            name="lastPrescription"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="flex h-fit w-[65%] rounded-sm border border-gray-300 bg-[#DADADA] py-1 pl-[5%] text-[12px]/[14.4px] text-[#958E8E]"
            required
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
    </div>
  )
}

export default NurseAttatchment
