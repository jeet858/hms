import React from "react";
import { DashboardTemplate } from "~/components";
import ManageTile from "~/components/elements/ManageTile";
import PatientForm from "~/components/form/PatientForm";
import TileLayout from "~/components/layout/TileLayout";
import CustomTable from "~/components/tables/CustomTable";

const Patients: React.FC = () => {
  const headers = [
    "ID",
    "Name",
    "Gender",
    "Age",
    "BloodGroup",
    "ContactNumber",
    "EmailId",
    "BirthDate",
    "BedNo",
  ];

  const data = [
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
    {
      ID: "PT 101",
      Name: "Deepak Mazumder",
      Gender: "Male",
      Age: "32",
      BloodGroup: "A+",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      BirthDate: "10/01/1990",
      BedNo: "10101",
    },
  ];

  const width = [
    "w-[7%]",
    "w-[15%]",
    "w-[7%]",
    "w-[15%]",
    "w-[10%]",
    "w-[15%]",
    "w-[12%]",
    "w-[10%]",
    "w-[10%]",
  ]

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div className="h-full w-full">
          <div>
            <ManageTile
              title="Manage Doctor"
              doctors={10}
              patients={50}
              nurses={20}
              pharmacists={5}
              laboratorists={3}
              accountants={2}
            />
          </div>
          <div className="h-[90%] w-full">
            <div className="h-[90%] w-full">
              <TileLayout
                tileone={"Patient List"}
                tiletwo={"Add Patient"}
                children1={<CustomTable headers={headers} widths={width} data={data} />}
                children2={<PatientForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default Patients;
