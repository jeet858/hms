import React, { useState } from "react";
import PersonalInfo from "./patient/PersonalInfo";
import EmployeeContact from "./employee/EmployeeContact";
import EmployeeAttatchment from "./employee/EmployeeAttatchment";
import EmpPersonalInfo from "./employee/EmployeePersonalDetails";

const EmployeeDetails: React.FC = () => {
  const [form, setForm] = useState<
    | "personalInfo"
    | "contactInfo"
    | "attatchment"
  >("personalInfo");
  const renderEmloyeeForm = () => {
    switch (form) {
      case "personalInfo":
        return (
          <EmpPersonalInfo
            data={personalInfo}
            setData={setPersonalInfo}
            saveAndNextClick={() => {
              setForm("contactInfo");
            }}
          />
        );
      case "contactInfo":
        return (
          <EmployeeContact
            data={empcontactInfo}
            setData={setEmpContactInfo}
            saveAndNextClick={() => {
              setForm("attatchment");
            }}
          />
        );
        break;
      case "attatchment":
        return (
          <EmployeeAttatchment
            data={empattatchment}
            setData={setEmpAttatchment}
            saveAndNextClick={() => {}}
          />
        );
        break;
    }
  };
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    spousesName: "",
    dateOfBirth: "",
    birthPlace: "",
    gender: "",
    relationshipStatus: "",
    religion: "",
    bloodGroup: "",
    depertment: "",
    designation: "",
    role: "",
    insuranceID: "",
    //doj=Date of Joining dol=Date of leaving
    doj: "",
    dol: "",
    username: "",
    passwoard: "",
  });
  const [empcontactInfo, setEmpContactInfo] = useState({
    address1: "",
    address2: "",
    city: "",
    contactNumber: "",
    emergencyContact: "",
    guardianName: "",
    relation: "",
    emailAddress: "",
  });
  const [empattatchment, setEmpAttatchment] = useState<{
    aadharCard: File | null;
    panCard: File | null;
    passport: File | null;
    visa: File | null;
    referralLetter: File | null;
    lastPrescription: File | null;
  }>({
    aadharCard: null,
    panCard: null,
    passport: null,
    visa: null,
    referralLetter: null,
    lastPrescription: null,
  });
  
  return (
    <div className="flex min-h-full w-full flex-col border ">
      <div className="flex h-fit flex-row items-center justify-start pl-6 space-x-4 pb-6 pt-4 font-sansation font-bold">
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setForm("personalInfo")}
        >
          Personal Information{" "}
          <div
            className={`h-[10%] w-full ${form === "personalInfo" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setForm("contactInfo")}
        >
          Contact Information
          <div
            className={`h-[10%] w-full ${form === "contactInfo" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        
        
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setForm("attatchment")}
        >
          Attachment
          <div
            className={`h-[10%] w-full ${form === "attatchment" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        
      </div>
      <div className="h-full min-h-full w-full grow">{renderEmloyeeForm()}</div>
    </div>
  );
};

export default EmployeeDetails;
