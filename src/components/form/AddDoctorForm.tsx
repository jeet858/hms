// import React from 'react'

// const AddDoctorForm = () => {
//   return (
//     <div>hfjyfkuyfkfkyu</div>
//   )
// }

// export default AddDoctorForm

// CreateDoctor.tsx

import Image from "next/image";
import React, { useState, type ChangeEvent } from "react";
import demoprofilepic from "../../../images/demoprofilepic.png";
import { FaCamera } from "react-icons/fa";
import { api } from "~/utils/api";

const AddDoctorForm: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [doctorData, setDoctorData] = useState<{
    name: string;
    contactNumber: string;
    department: string;
    gender: string;
    email: string;
    endTime: string;
    startTime: string;
    language: string;
    password: string;
    confirmPassword: string;
    availableDays: string[];
  }>({
    name: "",
    contactNumber: "",
    department: "",
    email: "",
    gender: "",
    endTime: "",
    startTime: "",
    language: "",
    password: "",
    confirmPassword: "",
    availableDays: [],
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setDoctorData((prevData) => {
      const availableDays = checked
        ? [...prevData.availableDays, value]
        : prevData.availableDays.filter((day) => day !== value);
      return { ...prevData, availableDays };
    });
  };
  const convertTimeStringToDate = (timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const now = new Date();
    if (!hours || !minutes) return;
    // Set hours and minutes to the current date
    now.setHours(hours, minutes, 0, 0);

    return now;
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted doctor data:", doctorData);
    create();
    // Add logic to handle form submission here
  };
  const createDoctor = api.doctor.addDoctor.useMutation({
    onSuccess(data, variables, context) {
      alert(`Dcotor created successfully with doctorId: ${data.doctorId}`);
    },
    onError(error, variables, context) {
      alert(`Error: ${error.message}`);
    },
  });
  const create = () => {
    const startTime = convertTimeStringToDate(doctorData.startTime);
    const endTime = convertTimeStringToDate(doctorData.endTime);

    if (doctorData.password !== doctorData.confirmPassword) {
      alert("Password does not match with confirm password");
      return;
    } else if (!startTime || !endTime) {
      return alert("Start and End time is required");
    }
    createDoctor.mutate({
      name: doctorData.name,
      availableDays: doctorData.availableDays,
      contactNumber: doctorData.contactNumber,
      department: doctorData.department,
      email: doctorData.email,
      endTime: startTime,
      language: doctorData.language,
      password: doctorData.password,
      startTime: endTime,
      gender: doctorData.gender,
    });
  };
  return (
    <div className="border-w-2 border border-[#00000040] p-1">
      <h1 className="w-full p-4 text-2xl text-[#00000073]">Create Profile</h1>
      <div className="flex w-full">
        {/* Left Section */}
        <div className="relative flex w-1/3 flex-col items-center p-2">
          <label
            htmlFor="profilePicInput"
            className="mb-4 h-32 w-32 cursor-pointer overflow-hidden rounded-full border border-[#00000040]"
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="00Profile00"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={demoprofilepic}
                alt="00Profile00"
                className="h-full w-full object-cover"
              />
            )}
          </label>
          <input
            id="profilePicInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <FaCamera className="absolute right-[26%] h-5 w-5" />
        </div>
        <div className=" h-96 w-0.5 border border-gray-300" />
        {/* Right Section */}
        <div className="mb-5 ml-5 w-2/3 font-lato">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={doctorData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Phone Number
              </label>
              <input
                type="number"
                name="contactNumber"
                value={doctorData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={doctorData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Gender
              </label>
              <select
                value={doctorData.gender}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
                name="gender"
              >
                <option value="">---Select Gender---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={doctorData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={doctorData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={doctorData.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Language
              </label>
              <input
                type="text"
                name="language"
                value={doctorData.language}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center">
              <label className="mr-2 block w-[30%] text-sm font-medium">
                Available Days
              </label>
              <div className="flex flex-wrap">
                {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <label key={day} className="mr-2">
                      <input
                        type="checkbox"
                        value={day}
                        checked={doctorData.availableDays.includes(day)}
                        onChange={handleCheckboxChange}
                        className="mr-1"
                      />
                      {day}
                    </label>
                  ),
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Available Time Slot
              </label>
              <div className="flex w-full">
                <div className="flex w-1/2 items-center space-x-2">
                  <label className="block text-sm font-medium">
                    Start Time
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={doctorData.startTime}
                    onChange={handleChange}
                    className="mt-1 block w-[50%] border border-gray-300"
                  />
                </div>
                <div className="flex w-1/2 items-center space-x-2">
                  <label className="block text-sm font-medium">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={doctorData.endTime}
                    onChange={handleChange}
                    className="mt-1 block w-[50%] border border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="submit"
                className="h-[50%] rounded-sm border-2 border-[#FFB800] bg-[#FFB800] px-[10%] text-black"
              >
                SAVE
              </button>
              <button
                type="button"
                className="h-[50%] rounded-sm border-2 bg-white px-[10%] text-black"
                onClick={() =>
                  setDoctorData({
                    name: "",
                    contactNumber: "",
                    department: "",
                    email: "",
                    endTime: "",
                    startTime: "",
                    language: "",
                    password: "",
                    confirmPassword: "",
                    gender: "",
                    availableDays: [],
                  })
                }
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorForm;
