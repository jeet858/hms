// import React from 'react'

// const AddDoctorForm = () => {
//   return (
//     <div>hfjyfkuyfkfkyu</div>
//   )
// }

// export default AddDoctorForm

// CreateDoctor.tsx

import React, { useState, ChangeEvent } from "react";
// import demoprofilepic from "../../../images/demoprofilepic.png";

const AddDoctorForm: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>("/demoprofilepic.png");

  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files[0]) {
  //       setProfilePic(URL.createObjectURL(e.target.files[0]));
  //     }
  //   };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="border-w-2 border border-[#00000040] p-1">
      <h1 className="w-full p-4 text-2xl text-[#00000073]">Create Profile</h1>
      <div className="flex w-full max-w-2xl">
        {/* Left Section */}
        <div className="flex w-1/3 flex-col items-center p-2">
          <label
            htmlFor="profilePicInput"
            className="mb-4 h-32 w-32 cursor-pointer overflow-hidden rounded-full border border-[#00000040]"
          >
            <img
              src={profilePic}
              alt="00Profile00"
              className="h-full w-full object-cover"
            />
          </label>
          <input
            id="profilePicInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="mt-2 h-13 border border-gray-300"></div>
        {/* Right Section */}
        <div className="ml-5 w-2/3">
          <form className="space-y-2">
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Doctor ID
              </label>
              <input
                type="text"
                // placeholder="Doctor ID"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Phone Number
              </label>
              <input
                type="number"
                // placeholder="+91"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Department
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-sm font-medium">
                Language
              </label>
              <input
                type="text"
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
                    <label key={day} className="mr-3">
                      <input type="checkbox" className="mr-1" />
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
                    className="mt-1 block w-[50%] border border-gray-300"
                  />
                </div>
                <div className="flex w-1/2 items-center space-x-2">
                  <label className="block text-sm font-medium">End Time</label>
                  <input
                    type="time"
                    className="mt-1 block w-[50%] border border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="submit"
                className="rounded-sm bg-[#FFB800] px-[10%] py-2 text-black"
              >
                SAVE
              </button>
              <button
                type="button"
                className="rounded-sm border-2 bg-white px-[9%] py-2 text-black"
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
