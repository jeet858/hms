import React, { useState } from "react";
import NursePersonalInfo from "./Nurse/NursePersonalInfo";
import NurseAttatchment from "./Nurse/NurseAttatchment";
import NurseContact from "./Nurse/NurseContact";

const AddNurseForm: React.FC = () => {
  const [nurseDetails, setNurseDetails] = useState<
    "nursepersonalinfo" | "nurseattachment" | "nursecontact"
  >("nursepersonalinfo");
  const renderNurseForm = () => {
    switch (nurseDetails) {
      case "nursepersonalinfo":
        return (
          <NursePersonalInfo
            data={nursepersonalinfo}
            setData={setNursePersonalInfo}
            saveAndNextClick={() => {
              setNurseDetails("nursecontact");
            }}
          />
        );
        break;
      case "nurseattachment":
        return (
          <NurseAttatchment
            data={nurseattatchment}
            setData={setNurseAttatchment}
            saveAndNextClick={()=>{}}
          />
        );
        break;
      case "nursecontact":
        return (
          <NurseContact
            data={nursecontactInfo}
            setData={setNurseContactInfo}
            saveAndNextClick={()=>{
              setNurseDetails("nurseattachment")
            }
            }
          />
        );
        break;
    }
  };

  const [nursepersonalinfo, setNursePersonalInfo] = useState({
    nursefirstName: "",
    nurselastName: "",
    nursefathersName: "",
    nursespousesName: "",
    nursedateOfBirth: "",
    nursebirthPlace: "",
    nursegender: "",
    nurserelationshipStatus: "",
    nursereligion: "",
    nursebloodGroup: "",
  });

  const [nursecontactInfo, setNurseContactInfo] = useState({
    nurseaddress1: "",
    nurseaddress2: "",
    nursecity: "",
    nursecontactNumber: "",
    nurseemergencyContact: "",
    nurseguardianName: "",
    nurserelation: "",
    nurseemailAddress: "",
  });

  const [nurseattatchment, setNurseAttatchment] = useState<{
    nurseimage:File|null;
    nurseaadharCard: File | null;
    nursepanCard: File | null;
    nursepassport: File | null;
    nursecertificate1: File | null;
    nursecertificate2: File | null;
    nursecertificate3: File | null;
  }>({
    nurseimage: null,
    nurseaadharCard: null,
    nursepanCard: null,
    nursepassport: null,
    nursecertificate1: null,
    nursecertificate2: null,
    nursecertificate3: null,
  });

  return (
    <div className="flex min-h-full w-full flex-col border ">
      <div className="flex h-fit flex-row items-center justify-evenly pb-6 pt-4 font-sansation font-bold">
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setNurseDetails("nursepersonalinfo")}
        >
          Personal Information{" "}
          <div
            className={`h-[10%] w-full ${nurseDetails === "nursepersonalinfo" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setNurseDetails("nursecontact")}
        >
          Contact Information
          <div
            className={`h-[10%] w-full ${nurseDetails === "nursecontact" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
        <span
          className="flex h-full cursor-pointer flex-col justify-between"
          onClick={() => setNurseDetails("nurseattachment")}
        >
          Attachment
          <div
            className={`h-[10%] w-full ${nurseDetails === "nurseattachment" ? "block" : "hidden"} border-b-2 border-yellow-400`}
          ></div>
        </span>
      </div>
      <div className="h-full min-h-full w-full grow">{renderNurseForm()}</div>
    </div>
  );
};

export default AddNurseForm;