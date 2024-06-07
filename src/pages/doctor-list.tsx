import React, { useState, useEffect } from "react";
import { DashboardTemplate } from "~/components";
import CustomTable from "~/components/elements/CustomTable";

const DoctorList: React.FC = (props) => {
  const data = [
    {
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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
      ID: 1,
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

  const headers = [
    "ID",
    "Name",
    "Gender",
    "Specialization",
    "Department",
    "Contact-Number",
    "EmailId",
    "Timings",
    "Days",
  ];
  // const widths = [
  //   "100px",
  //   "200px",
  //   "50px",
  //   "100px",
  //   "150px",
  //   "150px",
  //   "100px",
  //   "50px",
  //   "100px",
  // ];
  // const paddings = [
  //   "px-2",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  //   "10px",
  // ]

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="w-full">
        <div className="p-4">
          <CustomTable
            headers={headers}
            data={data}
            // widths={widths}
            // padding={paddings}          
            />
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default DoctorList;
