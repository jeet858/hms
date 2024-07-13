import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";

interface Iprops {
  tileone: string;
  children1: JSX.Element | JSX.Element[];
  activeTabProps?: "tabOne";
}

const TabOne: React.FC<Iprops> = ({
  tileone,
  children1,
  activeTabProps = "tabOne",
}) => {
  const [activeTab, setActiveTab] = useState<"tabOne">(activeTabProps);

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col rounded shadow ">
        <div className="flex space-x-1 border border-b-0 bg-blue-50">
          <button
            className={`px-4 py-2 ${activeTab === "tabOne" ? "border-white bg-white font-bold text-[#000000]" : "text-[#000000]"}`}
            onClick={() => setActiveTab("tabOne")}
          >
            <div className="flex border-[#4EA1E726]">
              <FaAlignJustify
                className={`mt-[5px] text-yellow-500 ${activeTab === "tabOne" ? "font-bold" : "text-[#070404]"}`}
              />
              <div className="ml-3 text-lg">{tileone}</div>
            </div>
          </button>
        </div>
        <div className="h-[90%] p-4">
          {activeTab === "tabOne" && <div className="">{children1}</div>}
        </div>
      </div>
    </div>
  );
};

export default TabOne;
