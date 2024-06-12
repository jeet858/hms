// import React from 'react'

// const AddDoctorForm = () => {
//   return (
//     <div>hfjyfkuyfkfkyu</div>
//   )
// }

// export default AddDoctorForm

// CreateDoctor.tsx

import React, { useState } from 'react';
import demoprofilepic from '../../../images/demoprofilepic.png'; // Adjust the import path as necessary


const AddDoctorForm: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>(demoprofilepic as unknown as string);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          setProfilePic(URL.createObjectURL(e.target.files[0]));
      }
  };

  return (
      
      <div className='p-1'>
          <h1 className="text-3xl w-full text-[#00000073] mb-2">Create Profile</h1>
          <div className="flex w-full max-w-4xl">
              {/* Left Section */}
              <div className="flex flex-col items-center w-1/3 p-4">
                  <label htmlFor="profilePicInput" className="w-32 h-32 rounded-full overflow-hidden cursor-pointer mb-4">
                      <img src="/demoprofilepic.png" alt="Profile" className="object-cover w-full h-full"/>
                  </label>
                  <input
                      id="profilePicInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                  />
              </div>
              {/* Right Section */}
              <div className="w-2/3 p-4">
                  <form className="space-y-4">
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Doctor ID</label>
                          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Phone Number</label>
                          <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Email</label>
                          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Password</label>
                          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Confirm Password</label>
                          <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Department</label>
                          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex space-x-4'>
                          <label className="block text-sm font-medium">Language</label>
                          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                      </div>
                      <div className='flex'>
                          <label className="block text-sm mr-2 font-medium">Available Days</label>
                          <div className="flex flex-wrap">
                              {['Mon', 'Tue', 'Wed', 'Thur','Fri', 'Sat', 'Sun'].map(day => (
                                  <label key={day} className="mr-4">
                                      <input type="checkbox" className="mr-1"/>
                                      {day}
                                  </label>
                              ))}
                          </div>
                      </div>
                      <div className='flex'>
                          <label className="block text-sm font-medium">Available Time Slot</label>
                          <div className="flex space-x-4">
                              <div className='flex'>
                                  <label className="block text-sm font-medium">Start Time</label>
                                  <input type="time" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                              </div>
                              <div className='flex'>
                                  <label className="block text-sm font-medium">End Time</label>        
                                  <input type="time" className="mt-1 block w-full border border-gray-300 rounded-md p-2"/>
                              </div>
                          </div>
                      </div>
                      <div className='flex flex-row'>
                          <div >
                          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                          </div>
                          <div className='ml-5'>
                          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Cancel</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default AddDoctorForm;

