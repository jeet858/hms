import React from "react";
import { useState } from "react";

const CustomTable: React.FC<TableProps> = (props) => {
  const [entriesToShow, setEntriesToShow] = useState<number>(10);
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
      {/* <div>
        <TotalRecords total={props.data.length} />
      </div> */}
      <div className="rounded-lg border w-full border-[#003A47] bg-[#F2F2F2] p-1 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="w-full rounded-lg border border-gray-300 bg-gray-100">
            <div className="flex rounded-t-lg w-full bg-gray-200">
              {props.headers.map((header, index) => (
                <div
                  key={index}
                  className={`flex text-[14px]/[16.41px] p-[0.5%] border-r border-gray-300 ${index==0 ? "w-[5%]" :index==1?"w-[15%]":index==2?"w-[10%]":index==3?"w-[15%]":"w-[10%]"} font-bold`}
                >
                  {header}
                </div>
              ))}
            </div>
            {paginatedData.map((item, rowIndex) => (
              <div key={rowIndex} className="flex border-t w-full border-gray-300">
                {props.headers.map((header, colIndex) => (
                  <div
                    key={colIndex}
                    className={`flex p-[0.5%] text-[14px]/[16.41px] border-r border-gray-300 ${colIndex==0 ? "w-[5%]" :colIndex==1?"w-[15%]":colIndex==2?"w-[10%]":colIndex==3?"w-[15%]":"w-[10%]"}`}
                  >
                    {item[header]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* <table className="min-w-full rounded-lg table-fixed">
            <thead>
              <tr className="bg-white-100">
                {props.headers.map((header, index) => (
                  <th
                    key={index}
                    className="bg-white border-2 border-[#F2F2F2] px-2 py-2 font-bold"
                    // style={{ width: props.widths[index] }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, rowIndex) => (
                <tr key={rowIndex} className="bg-white">
                  {props.headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className="bg-white border-2 border-[#F2F2F2] px-2 py-1"
                      // style={{ width: props.widths[colIndex] }}
                    >
                      {item[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table> */}
          <div className="mt-4 flex items-center justify-between">
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
                onClick={() => handlePageChange(currentPage - 1)}
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
                onClick={() => handlePageChange(currentPage + 1)}
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
  // widths: string[];
  // padding: string[];
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
