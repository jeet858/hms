import React, { useState } from "react";

interface EmployeeTableProps {
  headers: string[];
  data: Array<{ [key: string]: string }>;
  widths?: string[]; // Optional prop for column widths
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  headers,
  data,
  widths,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [entriesToShow, setEntriesToShow] = useState<number>(5); // Number of rows per page

  // Calculate total pages based on data length and entries to show
  const totalPages = Math.ceil(data.length / entriesToShow);

  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Function to handle entries per page change
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesToShow(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = startIndex + entriesToShow;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-[#003A47] bg-[#F2F2F2] p-1 shadow-lg">
      <div className="h-[380px] w-full px-[1.5rem] pt-[2.5rem]">
        <div className="flex h-[22%] w-full flex-row justify-between ">
          <div className="flex h-[60%] w-[47%] flex-row items-center">
            <span className="w-[36%] text-[21px]">Room No. / Name</span>
            <input
              type="text"
              placeholder="Enter Room No."
              className="h-full w-[60%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
              name=""
              id=""
            />
          </div>
          <div className="flex h-[60%] w-[47%] flex-row items-center">
            <span className="w-[36%] text-[21px]">Room No. / Name</span>
            <input
              type="text"
              placeholder="Enter Room No."
              className="h-full w-[60%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex h-[22%] w-full flex-row justify-between">
          <div className="flex h-[60%] w-[47%] flex-row items-center">
            <span className="w-[36%] text-[21px]">Room No. / Name</span>
            <input
              type="text"
              placeholder="Enter Room No."
              className="h-full w-[60%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
              name=""
              id=""
            />
          </div>
          <div className="flex h-[60%] w-[47%] flex-row items-center">
            <span className="w-[36%] text-[21px]">Room No. / Name</span>
            <input
              type="text"
              placeholder="Enter Room No."
              className="h-full w-[60%] border-[.1rem] border-[#dedede] px-[1rem] text-[14px]"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex h-[22%] w-full justify-end">
          <button className="flex h-[65%] w-[15%] items-center justify-center rounded-md bg-[#FFB800] text-[21px]">
            Submit
          </button>
        </div>
        <div className="flex h-[22%] w-full flex-row rounded-md bg-[#f8e6bc] pl-[2rem]">
          <span className="flex w-[24%] items-center text-[25px]">
            Total Working Hours
          </span>
          <span className="flex w-[24%] items-center text-[25px]">
            00 hours
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="w-full rounded-lg border border-gray-300 bg-gray-100">
          <div className="flex w-full rounded-t-lg bg-gray-200">
            {headers.map((header, index) => (
              <div
                key={index}
                className="flex border-r border-gray-300 p-[0.5%] text-sm font-bold"
                style={{ width: widths ? widths[index] : "auto" }} // Apply width from prop or default to auto
              >
                {header}
              </div>
            ))}
          </div>
          <div className="h-[155px] overflow-y-auto">
            {paginatedData.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="flex w-full border-t border-gray-300"
              >
                {headers.map((header, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex border-r border-gray-300 p-[0.5%] text-xs"
                    style={{ width: widths ? widths[colIndex] : "auto" }} // Apply width from prop or default to auto
                  >
                    {item[header]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="m-2 flex items-center justify-between">
            <div>
              <label htmlFor="entries" className="mr-2">
                Show
              </label>
              <select
                id="entries"
                className="rounded border border-gray-300 p-1"
                value={entriesToShow}
                onChange={handleEntriesChange} // Handle entries per page change
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
              <label htmlFor="entries" className="mr-2">
                &nbsp;entries
              </label>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange(1)}
                className="rounded px-2 py-1"
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="mr-2 rounded px-2 py-1"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <span>
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="ml-2 rounded px-2 py-1"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="rounded px-2 py-1"
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
