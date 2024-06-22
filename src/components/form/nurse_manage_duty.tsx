import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa6";

// Define the shape of the form state
interface FormValues {
  date: string;
  shift: string;
  ward: string;
  department: string;
  bedNo: string;
}

const Nurse_Manage_Duty: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    date: "",
    shift: "",
    ward: "",
    department: "",
    bedNo: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  // Handle input change with type definitions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validate the form fields
  const validateForm = () => {
    const newErrors: Partial<FormValues> = {};
    if (!formValues.date) newErrors.date = "Date is required";
    if (!formValues.shift) newErrors.shift = "Shift is required";
    if (!formValues.ward) newErrors.ward = "Ward is required";
    if (!formValues.department) newErrors.department = "Department is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Handle form submission
      console.log("Form submitted", formValues);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormValues({
      date: "",
      shift: "",
      ward: "",
      department: "",
      bedNo: "",
    });
    setErrors({});
  };

  return (
    <div>
      <div className="m-[1rem] h-[37rem] w-[83rem] border-[.1rem] border-[#dedede]">
        <form
          className="flex h-full w-full flex-col space-y-[1.5rem] p-[3rem]"
          onSubmit={handleSubmit}
        >
          {/* Date Input  */}
          <div className="flex h-[10%] w-[80%] flex-row items-center">
            <label
              htmlFor="date"
              className="flex w-[22%] items-center text-[21px] text-gray-700"
            >
              Select Date <div className="text-red-500">*</div>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={`${
                errors.date ? "border-red-500" : "border-gray-300"
              } h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px] focus:outline-none`}
              value={formValues.date}
              onChange={handleChange}
              required
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          {/* Shift Input */}
          <div className="flex h-[10%] w-[80%] flex-row items-center">
            <label
              htmlFor="shift"
              className="flex w-[22%] items-center text-[21px] text-gray-700"
            >
              Shift <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="shift"
              name="shift"
              className={`${
                errors.shift ? "border-red-500" : "border-gray-300"
              } h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px] focus:outline-none`}
              value={formValues.shift}
              onChange={handleChange}
              required
            />
            {errors.shift && (
              <p className="mt-1 text-sm text-red-500">{errors.shift}</p>
            )}
          </div>

          {/* Ward Input */}
          <div className="flex h-[10%] w-[80%] flex-row items-center">
            <label
              htmlFor="ward"
              className="flex w-[22%] items-center text-[21px] text-gray-700"
            >
              Ward <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="ward"
              name="ward"
              className={`${
                errors.ward ? "border-red-500" : "border-gray-300"
              } h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px] focus:outline-none`}
              value={formValues.ward}
              onChange={handleChange}
              required
            />
            {errors.ward && (
              <p className="mt-1 text-sm text-red-500">{errors.ward}</p>
            )}
          </div>

          {/* Department Input */}
          <div className="flex h-[10%] w-[80%] flex-row items-center">
            <label
              htmlFor="department"
              className="flex w-[22%] items-center text-[21px] text-gray-700"
            >
              Department <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className={`${
                errors.department ? "border-red-500" : "border-gray-300"
              } h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px] focus:outline-none`}
              value={formValues.department}
              onChange={handleChange}
              required
            />
            {errors.department && (
              <p className="mt-1 text-sm text-red-500">{errors.department}</p>
            )}
          </div>

          {/* Bed No Input */}
          <div className="flex h-[10%] w-[80%] flex-row items-center">
            <label
              htmlFor="bedNo"
              className="flex w-[22%] items-center text-[21px] text-gray-700"
            >
              Bed No (if specific)
            </label>
            <input
              type="text"
              id="bedNo"
              name="bedNo"
              className="h-full w-[50%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px] focus:outline-none"
              value={formValues.bedNo}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex h-[11%] w-full items-center justify-center">
            <div className="flex h-full w-[35%] flex-row justify-between">
              <button
                type="submit"
                className="flex h-full w-[45%] items-center justify-center bg-[#FFB800] text-[19px]"
              >
                Save
              </button>
              <button
                type="button"
                className="flex h-full w-[45%] items-center justify-center border-[.1rem] border-[#CACACA] text-[19px]"
                onClick={handleReset}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nurse_Manage_Duty;
