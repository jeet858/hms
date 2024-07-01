import React from 'react'

const GeneralDetails:React.FC = () => {
  const patientdetails = [
    { patientheading: "Last Name", patientdetails: "Majumder" },
    { patientheading: "First Name", patientdetails: "Deepak" },
    { patientheading: "Patient ID", patientdetails: "12014" },
    { patientheading: "Date Of Birth", patientdetails: "10 / 01 /1990" },
    { patientheading: "Blood Group", patientdetails: "A +" },
    { patientheading: "Father’s Name", patientdetails: "A Majumder" },
    { patientheading: "Spouse Name", patientdetails: "" },
    { patientheading: "Relationship Status", patientdetails: "Single" },
    { patientheading: "Religion", patientdetails: "Hindu" },
    { patientheading: "Birth Place", patientdetails: "Kolkata" },
  ];
  const patientcontactdetails = [
    {
      contactheading: "Address",
      contactdetails: "12/C Park circus, Kolkata 700002",
    },
    { contactheading: "Contact No.", contactdetails: "+91 9830012300" },
    {
      contactheading: "Emergency Contact",
      contactdetails: "+91 9832212300",
    },
    { contactheading: "Gaurdian’s Name", contactdetails: "A Majumder" },
    { contactheading: "Relation", contactdetails: "Father" },
  ];

  return (
    <div className="flex w-full font-sansation mt-[3%] flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold text-[#7E7E7E]">
          Personal Details
        </div>
        <div className="grid grid-cols-5 gap-4">
          {patientdetails.map((patient, index) => (
            <div key={index} className="">
              <div className="flex flex-col gap-1">
                <span className=" text-lg font-semibold text-[#2E2E2ECF]">
                  {patient.patientheading}
                </span>
                <span className="text-[#003A47]">{patient.patientdetails}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold text-[#7E7E7E]">
          Contact Details
        </div>
        <div className="grid grid-cols-5 gap-4">
          {patientcontactdetails.map((contact, index) => (
            <div key={index} className=" ">
              <div className="flex flex-col gap-1">
                <span className="h-[4rem] text-lg font-semibold text-[#2E2E2ECF]">
                  {contact.contactheading}
                </span>
                <span className="h-[6rem] text-[#003A47]">
                  {contact.contactdetails}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails
