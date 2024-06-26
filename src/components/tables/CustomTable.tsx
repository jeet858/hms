import React from "react";
import { useState } from "react";

const CustomTable: React.FC<TableProps> = (props) => {
  const [entriesToShow, setEntriesToShow] = useState<number>(13);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleEntriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesToShow(Number(event.target.value));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(props.data.length / entriesToShow);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * entriesToShow;
  const endIndex = startIndex + entriesToShow;
  const paginatedData = props.data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="w-full overflow-hidden rounded-lg border border-[#003A47] bg-[#F2F2F2] shadow-lg p-1">
        <div className="overflow-x-auto">
          <div className="w-full rounded-lg border border-gray-300 bg-gray-100">
            <div className="flex w-full rounded-t-lg bg-gray-200">
              {props.headers.map((header, index) => (
                <div
                  key={index}
                  //text-[14px]/[16.41px]
                  // className={`flex  border-r border-gray-300 p-[0.5%] text-sm ${index == 0 ? "w-[6%]" : index == 1 ? "w-[20%]" : index == 2 ? " center w-[6%]" : index == 3 ? "w-[15%]" : index == 5 ? "w-[12%]" : index == 6 ? "w-[12%]" : "w-[10%]"} font-bold`}
                  className={`flex border-r border-gray-300 p-[0.5%] text-sm ${props.widths[index]} font-bold`}
                >
                  {header}
                </div>
              ))}
            </div>
            {/* {paginatedData.map((item, rowIndex) => (
              <div
                key={rowIndex}
                className="flex w-full border-t border-gray-300"
              >
                {props.headers.map((header, colIndex) => (
                  <div
                    key={colIndex}
                    // className={`flex border-r border-gray-300 p-[0.5%] text-xs ${colIndex == 0 ? "w-[6%]" : colIndex == 1 ? "w-[20%]" : colIndex == 2 ? "w-[6%]" : colIndex == 3 ? "w-[15%]" : colIndex == 5 ? "w-[12%]" : colIndex == 6 ? "w-[12%]" : "w-[10%]"}`}
                    className={`flex border-r border-gray-300 p-[0.5%] text-xs ${props.widths[colIndex]}`}
                  >
                    {item[header]}
                  </div>
                ))}
              </div>
            ))}
          </div> */}
          <div className="h-[350px] overflow-y-auto">
              {paginatedData.map((item, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex w-full border-t border-gray-300"
                >
                  {props.headers.map((header, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex border-r border-gray-300 p-[0.5%] text-xs ${props.widths[colIndex]}`}
                    >
                      {item[header]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
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
                onChange={handleEntriesChange}
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
                className="rounded  px-2 py-1"
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="mr-2 rounded  px-2 py-1"
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

interface TableProps {
  headers: string[];
  widths: string[];
  data: Array<{ [key: string]: string | number }>;
}

interface TotalRecordsProps {
  total: number;
}

const TotalRecords: React.FC<TotalRecordsProps> = (props) => {
  return (
    <div className="mb-2 flex space-x-3">
      <div className="mt-1 font-sans text-xl text-cyan-700">
        Available Doctors
      </div>
      <div className="font-sans text-3xl text-[#00738C]">{props.total}</div>
    </div>
  );
};

export default CustomTable;
