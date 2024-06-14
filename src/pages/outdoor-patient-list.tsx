import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import TileLayout from "~/components/layout/TileLayout";
import ManageTile from "~/components/elements/ManageTile";
import CustomTable from "../components/tables/CustomTable";
import AddDoctorForm from "../components/form/AddDoctorForm";
import NewPatientaAppointmentForm from "~/components/form/NewPatientaAppointmentForm";

const Doctor: React.FC = () => {
  // const [page, setPage] = useState<number>(1);
  const headers = [
    "ID",
    "Name",
    "Gender",
    "Age",
    "DoctorsName",
    "Amount",
    "ContactNumber",
    "EmailId",
    "AppDate",
    "Status",
  ];

  const data = [
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    {
      ID: "PT101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      DoctorsName: "Deepak Mazumder",
      Amount: "1499.00",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      AppDate: "01/01/2024",
      Status: "Pending",
    },
    
  ];

  const width = [
    "w-[6%]", 
    "w-[20%]", 
    "w-[6%]", 
    "w-[6%]",
    "w-[20%]",  
    "w-[6%]",
    "w-[13%]",
    "w-[10%]",
    "w-[8%]",
    "w-[6%]",
  ]

  return (
    <DashboardTemplate active_tile="Out Door Patient">
      <div className="h-full w-full p-[1%]">
        <div>
          <div>
            <ManageTile
              title="Manage Patient"
              doctors={22}
              patients={13400}
              nurses={107}
              pharmacists={35}
              laboratorists={140}
              accountants={5}
            />
          </div>
          <div className="h-full w-full">
            <div className="w-full">
              <TileLayout
                tileone={"Patient List"}
                tiletwo={"New Appointment"}
                children1={<CustomTable headers={headers} data={data} widths={width} />}
                children2={<NewPatientaAppointmentForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default Doctor;
