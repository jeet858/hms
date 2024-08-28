import React from "react";

interface DetailsTableProps {
  name: string;
  btntxt?: string;
  arr: {
    name?: string;
    width: string;
  }[];
  dataarr:{
    index:number;
    remark:{
      width:string;
      data:string;
    }[]
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
    <div className="flex min-h-[6rem] w-full items-start rounded bg-yellow-50 p-2 shadow">
      <div className="flex w-full flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex-1  text-lg font-semibold">{props.name}</div>
          <button className="ml-auto flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <span>{props.btntxt}</span>
          </button>
        </div>
        <div className="flex h-10 justify-around w-full flex-row">
          {props.arr.map((item, index) => (
            <div
              key={index}
              className={`h-full rounded border border-black bg-white p-2 font-bold`}
              style={{ width: item.width || "auto" }}
            >
              {item.name}
            </div>
          ))}
        </div>
        {/* {fun()} */}
        {props.dataarr.map((item, i) => (
          <div key={i} className="flex h-10 justify-around w-full flex-row">
            {item.remark.map((item2, i2) => (
              <div
                key={i2}
                className=" rounded border border-gray-300 bg-white p-2"
                style={{ width: item2.width || "auto" }}
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
