import React from 'react';

interface ManageDoctorProps {
  title: string,
  doctors: number;
  patients: number;
  nurses: number;
  pharmacists: number;
  laboratorists: number;
  accountants: number;
}

const ManageDoctor: React.FC<ManageDoctorProps> = (props) => {
  return (
    <div className="flex justify-between items-center p-3">
      <h1 className="text-2xl">{props.title}</h1>
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Doctor</div>
            <div className="text-lg font-semibold mt-2 text-[#0E8803]">{props.doctors}</div>
          </div>
          <div className="h-9 border-l border-gray-300 mt-2"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Patient</div>
            <div className="text-lg font-semibold mt-2 text-[#CC0E0E]">{props.patients}</div>
          </div>
          <div className="h-9 border-l border-gray-300 mt-2"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Nurse</div>
            <div className="text-lg font-semibold mt-2 text-[#0E8803]">{props.nurses}</div>
          </div>
          <div className="h-9 border-l border-gray-300 mt-2"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Pharmacist</div>
            <div className="text-lg font-semibold mt-2 text-[#287CC6]">{props.pharmacists}</div>
          </div>
          <div className="h-9 border-l border-gray-300 mt-2"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Laboratorist</div>
            <div className="text-lg font-semibold mt-2 text-[#FFB800]">{props.laboratorists}</div>
          </div>
          <div className="h-9 border-l border-gray-300 mt-2"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-center">
            <div className="text-sm text-[#2E2E2EB0] font-bold">Accountant</div>
            <div className="text-lg font-semibold mt-2 text-[#F36562]">{props.accountants}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctor;
