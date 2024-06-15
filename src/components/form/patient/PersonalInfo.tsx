import React,{useState} from 'react'

interface PatientFormData {
  patientId: string;
  firstName: string;
  lastName: string;
  fathersName: string;
  spousesName: string;
  dateOfBirth: string;
  birthPlace: string;
  gender: string;
  relationshipStatus: string;
  religion: string;
  bloodGroup: string;
}

const PersonalInfo = () => {
  const [formData, setFormData] = useState<PatientFormData>({
    patientId: '12014',
    firstName: '',
    lastName: '',
    fathersName: '',
    spousesName: '',
    dateOfBirth: '',
    birthPlace: '',
    gender: '',
    relationshipStatus: '',
    religion: '',
    bloodGroup: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex flex-row w-[50%] items-center justify-between">
        <label className="block text-gray-700 text-[20px]/[24px] font-bold">Patient ID</label>
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled
        />
      </div>

      {[
        { label: 'First Name', name: 'firstName', required: true },
        { label: 'Last Name', name: 'lastName', required: true },
        { label: 'Father\'s Name', name: 'fathersName', required: false },
        { label: 'Spouse\'s Name', name: 'spousesName', required: false },
        { label: 'Date Of Birth', name: 'dateOfBirth', required: true, type: 'date' },
        { label: 'Birth Place', name: 'birthPlace', required: false }
      ].map(({ label, name, required, type = 'text' }) => (
        <div className="mb-4" key={name}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={(formData as never)[name]}
            onChange={handleChange}
            required={required}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}

      {[
        { label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Other'] },
        { label: 'Relationship Status', name: 'relationshipStatus', options: ['Single', 'Married', 'Divorced', 'Widowed'] },
        { label: 'Religion', name: 'religion', options: ['Christianity', 'Islam', 'Hinduism', 'Other'] },
        { label: 'Blood Group', name: 'bloodGroup', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] }
      ].map(({ label, name, options }) => (
        <div className="mb-4" key={name}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label} <span className="text-red-500">*</span>
          </label>
          <select
            name={name}
            value={(formData as never)[name]}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select {label.toLowerCase()}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          SAVE & NEXT
        </button>
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default PersonalInfo
