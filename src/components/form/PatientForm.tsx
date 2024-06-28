import React, { useState } from "react";
import PersonalInfo from "./patient/PersonalInfo";
import ContactDetails from "./patient/ContactDetails";
import Insurance from "./patient/Insurance";
import Attatchment from "./patient/Attatchment";
import AdmissionDetails from "./patient/AdmissionDetails";
import OtherInfo from "./patient/OtherInfo";
import { api } from "~/utils/api";

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
            saveAndNextClick={() => {
              setForm("admissionDetails");
            }}
          />
        );
        break;
      case "admissionDetails":
        return (
          <AdmissionDetails
            data={admissionDetails}
            setData={setAdmissionDetails}
            saveAndNextClick={() => {
              create();
            }}
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
    emergencyContactName: "",
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
  const createPatient = api.patient.addPatient.useMutation({
    onSuccess(data, variables, context) {
      alert("Patient created successfully");
    },
    onError(error, variables, context) {
      alert(`Error: ${error.message}`);
    },
  });
  const create = () => {
    createPatient.mutate({
      address1: contactInfo.address1,
      city: contactInfo.city,
      contactNumber: contactInfo.contactNumber,
      dob: new Date(personalInfo.dateOfBirth),
      firstName: personalInfo.firstName,
      gender: personalInfo.gender,
      lastName: personalInfo.lastName,
      // aadharCard: attatchment.aadharCard,
      address2: contactInfo.address2,
      allergies: otherInfo.allergies,
      bloodGroup: personalInfo.bloodGroup,
      bloodPressure: otherInfo.bloodPressure,
      email: contactInfo.emailAddress,
      emergencyContactName: contactInfo.emergencyContactName,
      emergencyContactNumber: contactInfo.emergencyContact,
      emergencyContactRelation: contactInfo.relation,
      fathersName: personalInfo.fathersName,
      height: otherInfo.height === "" ? 0 : parseInt(otherInfo.height),
      insuranceCompany: insuranceInfo.insuranceCompany,
      // lastPrescription: attatchment.lastPrescription,
      medicalHistory: otherInfo.medicalHistory,
      // panCard:attatchment.panCard,
      // passport:attatchment.passport,
      policyNumber: insuranceInfo.policyNo,
      prefferedLanguage: otherInfo.preferredLanguage,
      primaryPhysician: otherInfo.primaryPhysician,
      reference: otherInfo.reference,
      // referral:attatchment.referralLetter,
      spousesName: personalInfo.spousesName,
      // visa:attatchment.visa,
      weight: otherInfo.weight === "" ? 0 : parseInt(otherInfo.weight),
    });
  };
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
