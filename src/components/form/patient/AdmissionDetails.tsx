import React from 'react'

const AdmissionDetails = () => {
  return (
    <form className='space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal'>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Admission ID</label>
        <input
          type="text"
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Treatment ID</label>
        <input
          type="text"
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Medication ID</label>
        <input
          type="text"
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
        />
      </div>
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Date Of Admission </label>
        <input
          type="date"
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
          required
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Date Of Discharge</label>
        <input
          type="date"
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7 p-2"
          required
        />
      </div>
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Ward</label>
        <select
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7"
          required
        >
          <option value="" >Room Number</option>
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
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Room Number</label>
        <select
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7"
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
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Bed Number</label>
        <select
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7"
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
      <div className="flex flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Attending Physician</label>
        <select
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7"
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
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block text-gray-700">Admission Type </label>
        <select
          className=" block text-[#958E8E] text-[12px]/[14.4px] w-[65%] border border-gray-300 rounded-sm h-7"
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
      <div className="flex required flex-row w-[60%] justify-between">
        <label className="block  text-gray-700">Blood Group *</label>
        <select
          className=" block w-[65%] border text-[#958E8E] text-[12px]/[14.4px] border-gray-300 rounded-sm h-7"
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
  )
}

export default AdmissionDetails