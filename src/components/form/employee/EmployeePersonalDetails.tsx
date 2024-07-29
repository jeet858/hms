import React, { Dispatch, SetStateAction, useState } from "react";
interface EmpPersonalInfoData {
  firstName: string;
  lastName: string;
  fathersName: string;
  spousesName: string;
  dateOfBirth: string;
  birthPlace: string;
  gender: string;
  relationshipStatus: string;
  religion: string;
  bloodGroup: string;
  department: string;
  designation: string;
  role: string;
  insuranceid: string;
  //doj=Date of joining dol=date of Leaving
  doj: string;
  dol: string;
  username: string;
  passwoard: string;
}

interface Iprops {
  data: EmpPersonalInfoData;
  setData: Dispatch<SetStateAction<EmpPersonalInfoData>>;
  saveAndNextClick: () => void;
}
const EmpPersonalInfo: React.FC<Iprops> = ({
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
    <>
    <form className="space-y-[1%] px-4 pb-2 font-lato grid grid-rows-11 grid-flow-col text-[20px]/[24px] font-normal">
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Employee ID</label>
        <input
          type="text"
          className=" block  h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          className=" block  h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          className=" block  h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Father's Name</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="fathersName"
          value={data.fathersName}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Spouse's Name</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="spousesName"
          value={data.spousesName}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Birth Place</label>
        <input
          type="text"
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="birthPlace"
          value={data.birthPlace}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Gender</label>
        <select
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="gender"
          value={data.gender}
          onChange={handleChange}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Relationship Status</label>
        <input
          type="text"
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="relationshipStatus"
          value={data.relationshipStatus}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Religion</label>
        <input
          type="text"
          className=" block  h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="religion"
          value={data.religion}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Blood Group</label>
        <select
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="bloodGroup"
          value={data.bloodGroup}
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
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Depertment</label>
        <select
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          name="depertment"
          value={data.department}
          onChange={handleChange}
        >
          <option value="">Select blood group</option>
          <option value="A+">Demo</option>
          <option value="A+">Demo</option>
          <option value="A+">Demo</option>
        </select>
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Designation</label>
        <select
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          name="designation"
          value={data.designation}
          onChange={handleChange}
        >
          <option value="">Select blood group</option>
          <option value="A+">Demo</option>
          <option value="A+">Demo</option>
          <option value="A+">Demo</option>
        </select>
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Role</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="role"
          value={data.role}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Insurance ID</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="insueanceid"
          value={data.spousesName}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Date of Joining</label>
        <input
          type="date"
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="dateOfJoining"
          value={data.doj}
          onChange={handleChange}
        />
      </div>
      <div className="required flex w-full flex-row justify-between">
        <label className="block text-gray-700">Date of Leaving</label>
        <input
          type="date"
          className=" block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
          name="dateOfLeaving"
          value={data.dol}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full flex-row justify-between">
        <label className="block text-gray-700">Password</label>
        <input
          type="text"
          className="  block h-7 w-80 mr-4 rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          name="password"
          value={data.passwoard}
          onChange={handleChange}
        />
      </div>
      
    </form>
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
    </>
  );
};

export default EmpPersonalInfo;
