import React from "react";

interface DetailsTableProps {
  name: string;
  btntxt?: string;
  arr: {
    name?: string;
    width: string;
  }[];
  dataarr?: {
    index: number;
    remark: {
      width: string;
      data: string;
    }[];
  }[];
}

const DetailsTable: React.FC<DetailsTableProps> = (props) => {
  // const fun = () => {
  //   props.arr.map(
  //     (item)=>{
  //       console.log(item.width)
  //     }
  //   )
  // }

  return (
    <div className="flex min-h-[6rem] w-full items-start rounded-md bg-[#f8eed6] pb-[1.5rem] shadow">
      <div className="flex w-full flex-col items-center space-y-1 rounded-md px-[.5rem] ">
        <div className="flex w-full items-center justify-between px-[10px]">
          <div className="flex h-[6vh] w-fit items-center justify-start border-t-[4px] border-[#287CC6] pb-2 font-sansation text-[22px] text-[#7E7E7E]">
            {props.name}
          </div>
          <button className="ml-auto flex items-center space-x-1 text-[19px] text-[#7E7E7E] hover:text-gray-700">
            <span>{props.btntxt}</span>
          </button>
        </div>
        <div className="flex min-h-10 w-[98%] flex-row flex-wrap justify-between">
          {props.arr.map((item, index) => (
            <div
              key={index}
              className={`h-full whitespace-nowrap rounded border bg-white p-2 text-[#888787]`}
              style={{ width: item.width || "auto" }}
            >
              {item.name}
            </div>
          ))}
        </div>
        {/* {fun()} */}
        {props.dataarr?.map((item, i) => (
          <div
            key={i}
            className="flex min-h-10 w-[98%] flex-row justify-around text-[13px] text-[#888787]"
          >
            {item.remark.map((item2, i2) => (
              <div
                key={i2}
                className=" rounded border border-gray-300 bg-white p-2"
                style={{ width: item2.width }}
              >
                {item2.data}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTable;
