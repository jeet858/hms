import React, { useState } from "react";
import PersonalInfo from "./patient/PersonalInfo";
import ContactDetails from "./patient/ContactDetails";
import Insurance from "./patient/Insurance";
import Attatchment from "./patient/Attatchment";
import AdmissionDetails from "./patient/AdmissionDetails";
import OtherInfo from "./patient/OtherInfo";

const PatientForm: React.FC = () => {
  const [form, setForm] = useState<
    | "personalInfo"
    | "contactInfo"
    | "insurance"
    | "attatchment"
    | "admissionDetails"
    | "otherInfo"
  >("personalInfo");
  const renderPatientForm = () => {
    switch (form) {
      case "personalInfo":
        return (
          <PersonalInfo
            data={personalInfo}
            setData={setPersonalInfo}
            saveAndNextClick={() => {
              setForm("contactInfo");
            }}
          />
        );
      case "contactInfo":
        return (
          <ContactDetails
            data={contactInfo}
            setData={setContactInfo}
            saveAndNextClick={() => {
              setForm("insurance");
            }}
          />
        );
        break;
      case "insurance":
        return (
          <Insurance
            data={insuranceInfo}
            setData={setInsuranceInfo}
            saveAndNextClick={() => {
              setForm("otherInfo");
            }}
          />
        );
        break;
      case "otherInfo":
        return (
          <OtherInfo
            data={otherInfo}
            setData={setOtherInfo}
            saveAndNextClick={() => {
              setForm("attatchment");
            }}
          />
        );
        break;
      case "attatchment":
        return (
          <Attatchment
            data={attatchment}
            setData={setAttatchment}
            saveAndNextClick={() => {}}
          />
        );
        break;
      case "admissionDetails":
        return (
          <AdmissionDetails
            data={admissionDetails}
            setData={setAdmissionDetails}
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
  });
  const [contactInfo, setContactInfo] = useState({
    address1: "",
    address2: "",
    city: "",
    contactNumber: "",
    emergencyContact: "",
    guardianName: "",
    relation: "",
    emailAddress: "",
  });
  const [insuranceInfo, setInsuranceInfo] = useState({
    insuranceCompany: "",
    policyNo: "",
  });
  const [attatchment, setAttatchment] = useState<{
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
  const [admissionDetails, setAdmissionDetails] = useState({
    admissionID: "",
    treatmentID: "",
    medicationID: "",
    dateOfAdmission: "",
    dateOfDischarge: "",
    ward: "",
    roomNumber: "",
    bedNumber: "",
    attendingPhysician: "",
    admissionType: "",
    bloodGroup: "",
  });
  const [otherInfo, setOtherInfo] = useState({
    height: "",
    weight: "",
    bloodPressure: "",
    medicalHistory: "",
    reference: "",
    allergies: "",
    primaryPhysician: "",
    preferredLanguage: "",
  });
  return (
    <div className="flex min-h-full w-full flex-col border ">
      <div className="flex h-fit flex-row items-center justify-evenly pb-6 pt-4 font-sansation font-bold">
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
          onClick={() => setForm("insurance")}
        >
          Insurance
          <div
            className={`h-[10%] w-full ${form === "insurance" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setForm("otherInfo")}
        >
          Other Information
          <div
            className={`h-[10%] w-full ${form === "otherInfo" ? "block" : "hidden"} border-b-2 border-yellow-400`}
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
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setForm("admissionDetails")}
        >
          Admission Details
          <div
            className={`h-[10%] w-full ${form === "admissionDetails" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
      </div>
      <div className="h-full min-h-full w-full grow">{renderPatientForm()}</div>
    </div>
  );
};

export default PatientForm;
