import React, { useState, useEffect } from "react";
import { DashboardTemplate } from "~/components";
import CustomTable from "~/components/elements/CustomTable";

const DoctorList: React.FC = (props) => {
  const [page,setPage]=useState<number>(1)
  const render=()=>{
    switch(page){
      case 1:
        return <CustomTable
        headers={headers}
        data={data}
        // widths={widths}
        // padding={paddings}          
        />
        break;
      case 2:
        return 

    }
  }
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
    "ContactNumber",
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

      <div className="w-full h-full p-[1%]">

        <div>
          <div className="p-4 w-full h-full">
            <div>
              <button onClick={()=>setPage(1)}>Doctor List</button><button onClick={()=>setPage(2)}>Add Doctor</button>
            </div>
          {/* <CustomTable
            headers={headers}
            data={data}
            // widths={widths}
            // padding={paddings}          
            /> */}
            <div>
              {render()}
            </div>
        </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};
export default DoctorList;
