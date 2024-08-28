import React,{Dispatch,SetStateAction,useState} from 'react'

interface NursePersonalInfoData {
  nursefirstName: string;
  nurselastName: string;
  nursefathersName: string;
  nursespousesName: string;
  nursedateOfBirth: string;
  nursebirthPlace: string;
  nursegender: string;
  nurserelationshipStatus: string;
  nursereligion: string;
  nursebloodGroup: string;
}

interface Iprops {
  data: NursePersonalInfoData;
  setData: Dispatch<SetStateAction<NursePersonalInfoData>>;
  saveAndNextClick: () => void;
}

const NursePersonalInfo:React.FC<Iprops> = ({data,setData,saveAndNextClick,}) => {

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
    <form className="space-y-[0.7%] px-4 pb-2 font-lato text-[19px]/[24px] font-normal">
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Nurse ID</label>
        <input
          type="text"
          className=" block  h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          className=" block  h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="firstName"
          value={data.nursefirstName}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          className=" block  h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="lastName"
          value={data.nurselastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Father's Name</label>
        <input
          type="text"
          className="  block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="fathersName"
          value={data.nursefathersName}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Spouse's Name</label>
        <input
          type="text"
          className="  block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="spousesName"
          value={data.nursespousesName}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="dateOfBirth"
          value={data.nursedateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Birth Place</label>
        <input
          type="text"
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="birthPlace"
          value={data.nursebirthPlace}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Gender</label>
        <select
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="gender"
          value={data.nursegender}
          onChange={handleChange}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Relationship Status</label>
        <input
          type="text"
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="relationshipStatus"
          value={data.nurserelationshipStatus}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Religion</label>
        <input
          type="text"
          className=" block  h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="religion"
          value={data.nursereligion}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Blood Group</label>
        <select
          className=" block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="bloodGroup"
          value={data.nursebloodGroup}
          onChange={handleChange}
        >
          <option value="">Select blood group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
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
  )
}

export default NursePersonalInfo
