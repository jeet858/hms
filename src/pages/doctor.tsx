import React, { useState } from "react";
import { DashboardTemplate } from "~/components";
import TileLayout from "~/components/layout/TileLayout";
import ManageTile from "~/components/elements/ManageTile";
import CustomTable from "../components/tables/CustomTable";
import AddDoctorForm from "../components/form/AddDoctorForm";

const Doctor: React.FC = () => {
  // const [page, setPage] = useState<number>(1);
  const headers = [
    "ID",
    "Name",
    "Gender",
    "Specialization",
    "Department",
    "ContactNumber",
    "EmailId",
    "Timings",
    "Days",
  ];

  const data = [
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
    {
      ID: "DOC 101",
      Name: "Dr. M. Kamruzzaman Mazumder",
      Gender: "Male",
      Specialization: "MBBS, MD ( Medicine)",
      Department: "Medicine",
      ContactNumber: "9830012300",
      EmailId: "abc@gmail.com",
      Timings: "10AM - 12 PM",
      Days: "Mon - Sat",
    },
  ];

  const width = [
    "w-[6%]",
    "w-[20%]",
    "w-[6%]",
    "w-[15%]",
    "w-[10%]",
    "w-[12%]",
    "w-[12%]",
    "w-[10%]",
    "w-[10%]",
  ]

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div>
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
          <div className="h-full w-full">
            <div className="w-full">
              <TileLayout
                tileone={"Doctor List"}
                tiletwo={"Add Doctor"}
                children1={<CustomTable headers={headers} data={data} widths={width} />}
                children2={<AddDoctorForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default Doctor;
