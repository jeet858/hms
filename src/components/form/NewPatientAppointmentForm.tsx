import React from 'react'

const NewPatientAppointmentForm = () => {
  return (
    // <div>NewPatientAppointmentForm</div>
    <div className="border-w-2 border border-[#00000040] p-1">
      <h1 className="w-full p-2 text-2xl text-[#00000073]"></h1>
      <div className="flex w-full max-w-2xl">
        <div className="ml-5 w-full">
          <form className="space-y-1">
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">
                Patient ID
              </label>
              <input
                type="text"
                placeholder="Patient ID"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">
                Patient Name
              </label>
              <input
                type="text"
                placeholder="Select Patient"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">Last Name</label>
              <input
                type="email"
                placeholder='Last Name'
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">Father's Name</label>
              <input
                type="text"
                placeholder="Father's Name"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">Spouse's Name</label>
              <input
                type="text"
                placeholder="Spouse's Name"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">Date Of Birth</label>
              <input
                type="date"
                placeholder="Enter date of birth"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="block w-[40%] text-m font-medium">Birth Place</label>
              <input
                type="text"
                placeholder="Enter birth place"
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="gender" className="block w-[40%] text-m font-medium">Gender</label>
              <select
                name='gender'
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              >
                <option value="" disabled selected hidden>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="relation" className="block w-[40%] text-m font-medium">Relationship Status</label>
              <select
                name='relation'
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              >
                <option value="" disabled selected hidden>Select Relationship Status</option>
                <option value="married">Married</option>
                <option value="unmarried">Un-Married</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="religion" className="block w-[40%] text-m font-medium">Religion</label>
              <select
                name='religion'
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              >
                <option value="" disabled selected hidden>Select Religion</option>
                <option value="Indian">Indian</option>
                {/* <option value="female">Female</option> */}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="blood" className="block w-[40%] text-m font-medium">Blood Group</label>
              <select
                name='blood'
                className="mt-1 block w-full border border-gray-300"
                style={{ paddingLeft: '12px', paddingTop: '5px', paddingBottom: '5px', fontSize: '12px' }}
              >
                <option value="" disabled selected hidden>Select Blood Group</option>
                <option value="A">A+</option>
                <option value="B">B+</option>
                <option value="AB">AB+</option>
                <option value="O">O+</option>
              </select>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="submit"
                className="rounded-sm bg-[#FFB800] px-[6%] py-2 text-black"
              >
                SAVE & NEXT
              </button>
              <button
                type="reset"
                className="rounded-sm border-2 bg-white px-[9%] py-2 text-black"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPatientAppointmentForm