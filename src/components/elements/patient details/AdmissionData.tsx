import React from "react";
import { FaPencil } from "react-icons/fa6";

const AdmissionData: React.FC = () => {
  return (
    <div>
      {/* given exact height and width as per my laptop but need o be fixed soon */}
      <div className="flex pt-[3%] flex-col font-sansation text-[17px]/[19.03px] space-y-[5%]">
        
        <div className="flex h-[18%] w-full flex-row justify-between">
          <div className="flex h-full w-[16%] text-balance flex-col space-y-3">
            <span className="text-[#2E2E2E]">Insurance Provider</span>
            <span className="text-[#003A47]">National Insurance Pvt. Ltd.</span>
          </div>
          <div className="flex h-full w-[16%] break-words flex-col space-y-3">
            <span className="text-[#2E2E2E]">Policy No.</span>
            <span className="text-[#003A47]">NIC000123456789</span>
          </div>
          <div className="flex h-full w-[16%] text-balance flex-col space-y-3">
            <span className="text-[#2E2E2E]">Blood Pressure</span>
            <span className="text-[#003A47]">140/85</span>
          </div>
          <div className="flex h-full w-[16%] text-balance flex-col space-y-3">
            <span className="text-[#2E2E2E]">Referance</span>
            <span className="text-[#003A47]">behala Rural Hosp.</span>
          </div>
          <div className="flex h-full w-[16%] text-balance flex-col space-y-3">
            <span className="text-[#2E2E2E]">Primary Physicial</span>
            <span className="text-[#003A47]">Dr. A Sanyal</span>
          </div>
        </div>
        <div className="flex h-[22%] w-full flex-col space-y-3">
          <span className="text-[#2E2E2E]">Medical History</span>
          <div className="w-full pr-[2rem] text-[#003A47]">
            The patient reported using oral antibiotics and mucolytics with no
            significant relief. He reported having used illicit drugs
            intravenously in the past and gave a history of high-risk sexual
            behaviour. The patient denied a history of tuberculosis or diabetes.
          </div>
        </div>
        <div className="flex h-[16%] w-full flex-row justify-between">
          <div className="flex h-full text-wrap flex-col space-y-3">
            <span className="text-[#2E2E2E]">Admission ID</span>
            <span className="text-[#003A47]">ADI23456</span>
          </div>
          <div className="flex h-full text-wrap flex-col space-y-3">
            <span className="text-[#2E2E2E]">Treatment ID</span>
            <span className="text-[#003A47]">TDI23456</span>
          </div>
          <div className="flex h-full text-wrap flex-col space-y-3">
            <span className="text-[#2E2E2E]">Medication ID</span>
            <span className="text-[#003A47]">MDI223456</span>
          </div>
          <div className="flex h-full text-wrap flex-col space-y-3">
            <span className="text-[#2E2E2E]">Date of admission</span>
            <span className="flex flex-row justify-between text-[#003A47]">
              <span>24-06-2024</span>
              <FaPencil />
            </span>
          </div>
          <div className="flex h-full w-[16%] flex-col  space-y-3">
            <span className="text-[#2E2E2E]">Date of discharge</span>
            <span className="flex flex-row justify-between space-x- text-[#003A47]">
              <span>-</span>
              <FaPencil />
            </span>
          </div>
        </div>
        <div className="flex h-[18%] w-full flex-row justify-between">
          <div className="flex h-full flex-col space-y-3">
            <span className="text-[#2E2E2E]">Ward</span>
            <span className="text-[#003A47]">General Ward</span>
          </div>
          <div className="flex h-full flex-col space-y-3">
            <span className="text-[#2E2E2E]">Room No.</span>
            <span className="text-[#003A47]">101</span>
          </div>
          <div className="flex h-full flex-col space-y-3">
            <span className="text-[#2E2E2E]">Attending Physicial</span>
            <span className="text-[#003A47]">Dr. AKM. Sejedur Rahman</span>
          </div>
          <div className="flex h-full flex-col space-y-3">
            <span className="text-[#2E2E2E]">Admission Type</span>
            <span className="text-[#003A47]">Referrall</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionData;
