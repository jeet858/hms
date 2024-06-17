import React,{useState} from "react";
import PersonalInfo from "./patient/PersonalInfo";
import ContactDetails from "./patient/ContactDetails";
import Insurance from "./patient/Insurance";
import Attatchment from "./patient/Attatchment";
import AdmissionDetails from "./patient/AdmissionDetails";
import OtherInfo from "./patient/OtherInfo";

const PatientForm: React.FC = () => {
  const [form,setForm]=useState<"personalInfo"|"contactInfo"|"insurance"|"attatchment"|"admissionDetails"|"otherInfo">("personalInfo")
  const renderPatientForm=()=>{
    switch(form){
      case "personalInfo":
        return <PersonalInfo/>
        break;
      case "contactInfo":
        return <ContactDetails/>
        break;
      case "insurance":
        return <Insurance/>
        break;
      case "otherInfo":
        return <OtherInfo/>
        break;
      case "attatchment":
        return <Attatchment/>
        break;
      case "admissionDetails":
        return <AdmissionDetails/>
        break;
    }
  }
  return (
    <div className="min-h-full w-full flex flex-col border ">
      <div className="flex font-sansation font-bold h-[2rem] flex-row items-center justify-evenly">
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("personalInfo")}>
          Personal Information{" "}
          <div className={`h-[10%] w-full ${form=="personalInfo"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("contactInfo")}>
          Contact Information
          <div className={`h-[10%] w-full ${form=="contactInfo"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("insurance")}>
          Insurance
          <div className={`h-[10%] w-full ${form=="insurance"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("otherInfo")}>
          Other Information
          <div className={`h-[10%] w-full ${form=="otherInfo"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("attatchment")}>
          Attachment
          <div className={`h-[10%] w-full ${form=="attatchment"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
        <span className="flex h-full cursor-pointer flex-col justify-between" onClick={()=>setForm("admissionDetails")}>
          Admission Details
          <div className={`h-[10%] w-full ${form=="admissionDetails"? "block":"hidden"} bg-yellow-400`}></div>
        </span>
      </div>
      <div className="w-full grow">
        {renderPatientForm()}
      </div>
    </div>
  );
};

export default PatientForm;
