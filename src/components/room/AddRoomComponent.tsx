import React from "react";

const AddRoomComponent: React.FunctionComponent = () => {
  const addrooms = [
    {
      label: "Room No. / Name",
      type: "text",
      name: "roomno/name",
      placeholder: "Enter Room No. / Name",
    },
    {
      label: "Room Type",
      type: "select",
      name: "roomtype",
      placeholder: "Select Room Type",

      options: [
        "General Ward",
        "Twin Sharing Room",
        "Semi Deluxe",
        "Executive",
        "Executive Deluxe",
      ],
    },
    {
      label: "Floor",
      type: "text",
      name: "flooreno",
      placeholder: "Enter floor no.",
    },

    {
      label: "No. Of Beds",
      type: "text",
      name: "bedsno",
      placeholder: "Enter no. of beds",
    },
    {
      label: "Room Rate",
      type: "text",
      name: "roomrate",
      placeholder: "INR  0000.00",
    },
  ];
  return (
    <div className="h-[60vh] overflow-scroll border  border-[#00000040]  p-2">
      <div className="flex flex-col gap-4">
        <form className="flex w-full  flex-col gap-8 p-2">
          <div className="flex w-full flex-col gap-4">
            {addrooms.map((room, index) => (
              <span className="flex w-full items-center gap-2" key={index}>
                <div className="w-[25%]">
                  <span>{room.label}</span>
                </div>
                <div className="w-[40%]">
                  {room.type === "select" ? (
                    <select
                      name={room.name}
                      className="h-[2rem] rounded-md border border-[#00000040] bg-white text-[#3B3B3B]  placeholder-[#3B3B3B] sm:w-full sm:p-1 sm:text-xs md:p-2 md:text-sm"
                    >
                      <option value="" disabled selected>
                        {room.placeholder}
                      </option>
                      {room.options
                        ? room.options.map((option, index) => (
                            <option value={option} key={index}>
                              {option}
                            </option>
                          ))
                        : null}
                    </select>
                  ) : (
                    <input
                      type={room.type}
                      name={room.name}
                      placeholder={room.placeholder}
                      className="h-[2rem] rounded-md border border-[#00000040] bg-white text-[#3B3B3B] sm:w-full  sm:p-1  sm:text-xs md:p-2 md:text-sm"
                    />
                  )}
                </div>
              </span>
            ))}
          </div>
          <span className="flex   w-full items-center justify-center gap-5  text-lg">
            <button
              className="h-[2.5rem] w-[15%] rounded-md bg-[#FFB800] text-[#2E2E2E] hover:bg-[#e0b853]"
              type="submit"
            >
              SAVE
            </button>
            <button
              className="h-[2.5rem] w-[15%] rounded-md border border-[#7E7E7E] bg-white text-[#2E2E2E] "
              type="submit"
            >
              CANCEL
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddRoomComponent;
