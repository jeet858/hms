import React from "react";

interface ManageDoctorProps {
  title: string;
  doctors: number;
  patients: number;
  nurses: number;
  pharmacists: number;
  laboratorists: number;
  accountants: number;
}

const ManageTile: React.FC<ManageDoctorProps> = (props) => {
  return (
    <div className="flex items-center justify-between p-3">
      <h1 className="text-2xl">{props.title}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">Doctor</div>
            <div className="mt-2 text-lg font-semibold text-[#0E8803]">
              {props.doctors}
            </div>
          </div>
          <div className="mt-2 h-9 border-l border-gray-300"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">Patient</div>
            <div className="mt-2 text-lg font-semibold text-[#CC0E0E]">
              {props.patients}
            </div>
          </div>
          <div className="mt-2 h-9 border-l border-gray-300"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">Nurse</div>
            <div className="mt-2 text-lg font-semibold text-[#0E8803]">
              {props.nurses}
            </div>
          </div>
          <div className="mt-2 h-9 border-l border-gray-300"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">Pharmacist</div>
            <div className="mt-2 text-lg font-semibold text-[#287CC6]">
              {props.pharmacists}
            </div>
          </div>
          <div className="mt-2 h-9 border-l border-gray-300"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">
              Laboratorist
            </div>
            <div className="mt-2 text-lg font-semibold text-[#FFB800]">
              {props.laboratorists}
            </div>
          </div>
          <div className="mt-2 h-9 border-l border-gray-300"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-center">
            <div className="text-sm font-bold text-[#2E2E2EB0]">Accountant</div>
            <div className="mt-2 text-lg font-semibold text-[#F36562]">
              {props.accountants}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTile;
