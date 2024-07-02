import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import TileLayout from "~/components/layout/TileLayout";
import ManageTile from "~/components/elements/ManageTile";
import CustomTable from "../components/tables/CustomTable";
import AddNurseForm from "~/components/form/AddNurseForm";

const Nurse: React.FC = () => {
  // const [page, setPage] = useState<number>(1);
  const headers = [
    "ID",
    "Name",
    "Gender",
    "Age",
    "Department",
    "Address",
    "ContactNumber",
    "EmailId",
    "Shift",
    "Status",
  ];

  const data = [
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
    {
      ID: "NS 101",
      Name: "Deepak Mazumder",
      Gender: "Female",
      Age: "32",
      Department: "Medicine",
      Address: "Howrah",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Shift: "Morning",
      Status: "On duty",
    },
  ];

  const width = [
    "w-[5%]",
    "w-[20%]",
    "w-[6%]",
    "w-[10%]",
    "w-[10%]",
    "w-[9%]",
    "w-[12%]",
    "w-[12%]",
    "w-[6%]",
    "w-[10%]",
  ]

  return (
    <DashboardTemplate active_tile="Nurses">
      <div className="h-full w-full p-[1%]">
        <div>
          <div>
            <ManageTile
              title="Manage Nurse"
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
                tileone={"Nurse List"}
                tiletwo={"Add Nurse"}
                children1={<CustomTable headers={headers} data={data} widths={width} />}
                children2={<AddNurseForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default Nurse;
