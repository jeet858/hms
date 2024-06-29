import React from "react";

interface TableProps {
  title: string;
  rows: Array<{
    id: string;
    doctorName: string;
    date: string;
    time: string;
    prescription: string;
  }>;
  onAddMore: () => void;
}

const TableWithAddButton: React.FC<TableProps> = (props) => {
  return (
    <div className="overflow-x-auto rounded border">
      <div className="min-w-full overflow-hidden rounded-lg bg-yellow-50 p-1">
        <div className="flex items-center justify-between border-gray-200 bg-yellow-50 px-2 py-1">
          <div className="font-sansation text-lg text-[#7E7E7E]">
            {props.title}
          </div>
          <button
            onClick={props.onAddMore}
            className="rounded-md bg-transparent px-3 py-1 font-sansation text-sm text-gray-600 hover:text-gray-800"
          >
            + Add more
          </button>
        </div>
        <div className="relative h-28 min-w-full">
          <div className="absolute inset-0 overflow-y-auto">
            <div className="divide-y divide-yellow-50 bg-yellow-50">
              <div className="grid grid-cols-12 px-1 pb-[2px] text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <div className="col-span-1 flex items-center rounded bg-white p-2 text-[10px]">
                  ID
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="col-span-3 flex items-center rounded bg-white p-2 text-[10px]">
                  Doctor's Name
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="col-span-3 flex items-center rounded bg-white p-2 text-[10px]">
                  Date
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="col-span-2 flex items-center rounded bg-white p-2 text-[10px]">
                  Time
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="col-span-3 flex items-center rounded bg-white p-2 text-[10px]">
                  Prescription
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {props.rows.map((row) => (
                <div
                  key={row.id}
                  className="grid grid-cols-12 rounded px-1 text-sm text-gray-900"
                >
                  <div className="col-span-1 rounded border border-yellow-50 bg-white px-2 text-[10px]">
                    {row.id}
                  </div>
                  <div className="col-span-3 rounded border border-yellow-50 bg-white px-2 text-[10px]">
                    {row.doctorName}
                  </div>
                  <div className="col-span-3 rounded border border-yellow-50 bg-white px-2 text-[10px]">
                    {row.date}
                  </div>
                  <div className="col-span-2 rounded border border-yellow-50 bg-white px-2 text-[10px]">
                    {row.time}
                  </div>
                  <div className="col-span-3 flex items-center rounded border border-yellow-50 bg-white px-2 text-[10px]">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.5 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7.5L14.5 2zm1 7.5H8.5V8h7v1.5zm-7 2h7v1.5h-7v-1.5zm7 2h-7V15h7v-1.5zm1.5 4.5H7V4h6v5h5v10z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWithAddButton;
