import React, { useState } from 'react';

const PersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    spousesName: '',
    dateOfBirth: '',
    birthPlace: '',
    gender: '',
    relationshipStatus: '',
    religion: '',
    bloodGroup: '',
  });


  return (
    <form className="space-y-[0.7%] text-[20px]/[24px] font-normal px-4 pb-2 font-lato">
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Patient ID</label>
        <input
          type="text"
          className=" block  text-[12px]/[14.4px] text-[#958E8E] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
          required
        />
      </div>
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          className=" block  text-[12px]/[14.4px] text-[#958E8E] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
          required
        />
      </div>
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          className=" block  text-[12px]/[14.4px] text-[#958E8E] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
          required
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Father's Name</label>
        <input
          type="text"
          className="  text-[12px]/[14.4px] text-[#958E8E] block w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Spouse's Name</label>
        <input
          type="text"
          className="  text-[12px]/[14.4px] text-[#958E8E] block w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          className=" block w-[65%] text-[#958E8E] border border-gray-300 rounded-sm h-7 text-[12px]/[14.4px] p-2"
          required
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Birth Place</label>
        <input
          type="text"
          className=" text-[12px]/[14.4px] text-[#958E8E] block w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Gender</label>
        <select
          className=" block w-[65%] text-[#958E8E] border border-gray-300 rounded-sm h-7 text-[12px]/[14.4px]"
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Relationship Status</label>
        <input
          type="text"
          className=" block w-[65%] border text-[12px]/[14.4px] text-[#958E8E] border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Religion</label>
        <input
          type="text"
          className=" block  text-[12px]/[14.4px] text-[#958E8E] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Blood Group</label>
        <select
          className=" block w-[65%] text-[#958E8E] border border-gray-300 rounded-sm h-7 text-[12px]/[14.4px]"
          required
        >
          <option value="" >Select blood group</option>
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

export default PersonalInfo;
