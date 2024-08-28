import React from "react";

const GeneralInfo: React.FC = () => {
  return (
    <div className="rounded bg-yellow-50 p-4 shadow-md">
      <div className="mb-4 border-b-2 border-blue-300 pb-2">
        <h2 className="text-lg font-sansation font-semibold text-gray-700">
          General Information
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex">
          <div className="w-1/2 text-gray-600">Admission Date</div>
          <div className="w-1/2">Jun 10, 2024</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-gray-600">Admission Time</div>
          <div className="w-1/2">07:44:14 AM</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-gray-600">In-Charge Doctor</div>
          <div className="w-1/2">Pr. Dr. Md. Abdus Sobur</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-gray-600">Department</div>
          <div className="w-1/2">Cardiology</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-gray-600">Room</div>
          <div className="w-1/2">01</div>
        </div>
        <div className="flex">
          <div className="w-1/2 text-gray-600">Bed No.</div>
          <div className="w-1/2">10101</div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
