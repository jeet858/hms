import React, { Dispatch, SetStateAction } from "react";
interface AdmissionForm {
  admissionID: string;
  treatmentID: string;
  medicationID: string;
  dateOfAdmission: string; // ISO date string
  dateOfDischarge: string; // ISO date string
  ward: string;
  roomNumber: string;
  bedNumber: string;
  attendingPhysician: string;
  admissionType: string;
  bloodGroup: string;
}
interface Iprops {
  data: AdmissionForm;
  setData: Dispatch<SetStateAction<AdmissionForm>>;
  saveAndNextClick: () => void;
}
const AdmissionDetails: React.FunctionComponent<Iprops> = ({
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
      onSubmit={handleSubmit}
      className="space-y-[0.7%] p-4 font-lato text-[20px]/[24px] font-normal"
    >
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Admission ID</label>
        <input
          type="text"
          name="admissionID"
          value={data.admissionID}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      {/* Repeat for other fields */}
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Treatment ID</label>
        <input
          type="text"
          name="treatmentID"
          value={data.treatmentID}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Medication ID</label>
        <input
          type="text"
          name="medicationID"
          value={data.medicationID}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
        />
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Date Of Admission</label>
        <input
          type="date"
          name="dateOfAdmission"
          value={data.dateOfAdmission}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Date Of Discharge</label>
        <input
          type="date"
          name="dateOfDischarge"
          value={data.dateOfDischarge}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 p-2 text-[12px]/[14.4px] text-[#958E8E]"
          required
        />
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Ward</label>
        <select
          name="ward"
          value={data.ward}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
        >
          <option value="">Select Ward Number</option>
          <option value="A101">Ward A101</option>
          <option value="A102">Ward A102</option>
          <option value="B201">Ward B201</option>
          <option value="B202">Ward B202</option>
          <option value="C301">Ward C301</option>
          <option value="C302">Ward C302</option>
          <option value="D401">Ward D401</option>
          <option value="D402">Ward D402</option>
        </select>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Room Number</label>
        <select
          name="roomNumber"
          value={data.roomNumber}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
        >
          <option value="">Select Room Number</option>
          <option value="101">Room 101</option>
          <option value="102">Room 102</option>
          <option value="103">Room 103</option>
          <option value="104">Room 104</option>
          <option value="201">Room 201</option>
          <option value="202">Room 202</option>
          <option value="203">Room 203</option>
          <option value="204">Room 204</option>
        </select>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Bed Number</label>
        <select
          name="bedNumber"
          value={data.bedNumber}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
        >
          <option value="">Select Bed Number</option>
          <option value="1">Bed 1</option>
          <option value="2">Bed 2</option>
          <option value="3">Bed 3</option>
          <option value="4">Bed 4</option>
          <option value="5">Bed 5</option>
          <option value="6">Bed 6</option>
          <option value="7">Bed 7</option>
          <option value="8">Bed 8</option>
        </select>
      </div>
      <div className="flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Attending Physician</label>
        <select
          name="attendingPhysician"
          value={data.attendingPhysician}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
        >
          <option value="">Select Attending Physician</option>
          <option value="Dr. John Smith">Dr. John Smith</option>
          <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
          <option value="Dr. Michael Brown">Dr. Michael Brown</option>
          <option value="Dr. Jessica Williams">Dr. Jessica Williams</option>
          <option value="Dr. David Jones">Dr. David Jones</option>
          <option value="Dr. Maria Garcia">Dr. Maria Garcia</option>
          <option value="Dr. Robert Martinez">Dr. Robert Martinez</option>
          <option value="Dr. Sarah Davis">Dr. Sarah Davis</option>
        </select>
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Admission Type</label>
        <select
          name="admissionType"
          value={data.admissionType}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
        >
          <option value="">Select Admission Type</option>
          <option value="Emergency">Emergency</option>
          <option value="Elective">Elective</option>
          <option value="GeneralCheckup">General Checkup</option>
        </select>
      </div>
      <div className="required flex w-[60%] flex-row justify-between">
        <label className="block text-gray-700">Blood Group</label>
        <select
          name="bloodGroup"
          value={data.bloodGroup}
          onChange={handleChange}
          className="block h-7 w-[65%] rounded-sm border border-gray-300 text-[12px]/[14.4px] text-[#958E8E]"
          required
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
  );
};

export default AdmissionDetails;
