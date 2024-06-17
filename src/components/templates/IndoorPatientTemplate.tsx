import React, { useEffect, useRef, useState } from "react";
import logo from "../../../images/healthcare-logo.png";
import graph_icon from "../../../images/graph_icon.png";
import bell_icon from "../../../images/bell_icon.png";
import power_icon from "../../../images/power_icon.png";
import Image from "next/image";
import NavigationTile from "../elements/NavigationTile";
import {
  FaBell,
  FaPowerOff,
  FaSearch,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { signOut } from "next-auth/react";
interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
  active_tile:
    | "Home"
    | "Available Patients"
    | "Available Doctors"
    | "Doctor List"
    | "Add Patient";
}
const IndoorPatientTemplate: React.FC<MainPageTemplateProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [inputField, setInputField] = useState(false);
  const [expanded, setExpanded] = useState(true);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        inputRef.current.value = "";
        setInputField(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (inputField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputField]);
  return (
    <div className="main-bg flex h-screen w-screen pt-4">
      <div className="flex h-full w-1/5 flex-col">
        <Image src={logo} alt="" className="h-[7.5%] w-4/5 self-center" />
        <div className="mt-8 flex h-fit w-full flex-col gap-y-4 self-center">
          <div
            className="relative flex w-full min-w-full items-center "
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <NavigationTile
              active={props.active_tile === "Home"}
              tile_text="Home"
              href=""
            />
            <div className="absolute z-10 flex w-4/5 cursor-pointer items-end justify-end">
              <MdOutlineKeyboardArrowDown className="mr-5 h-8 w-8  text-yellow-500" />
            </div>
          </div>
          {expanded ? (
            <div ref={ref} className="flex  flex-col gap-y-4">
              <NavigationTile
                active={props.active_tile === "Available Patients"}
                tile_text="Available Patients"
                href="available-patients"
              />
              <NavigationTile
                active={props.active_tile === "Available Doctors"}
                tile_text="Available Doctors"
                href="available-doctor"
              />
              <NavigationTile
                active={props.active_tile === "Doctor List"}
                tile_text="Doctor List"
                href=""
              />
              <NavigationTile
                active={props.active_tile === "Add Patient"}
                tile_text="Add Patient"
                href=""
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex h-full w-4/5 flex-col">
        <div className="flex h-[5%] w-[95%] items-center justify-between self-center">
          <p className="text-4xl font-light text-white">In Door Patient</p>
          <div
            ref={containerRef}
            className="flex w-2/5 flex-row items-center justify-center text-white"
            onClick={(e) => {
              e.preventDefault();
              setInputField(true);
            }}
          >
            <p
              className={`${inputField ? "hidden" : "flex"} items-center justify-center gap-x-2 text-center text-lg`}
            >
              <FaSearch />
              Search
            </p>
            <input
              ref={inputRef}
              className={`h-full w-full bg-transparent ${inputField ? "flex" : "hidden"} text-center outline-none`}
            />
          </div>
          <div className="flex items-center justify-center gap-x-8 text-white">
            <div className="rounded-full ">
              <FaUserAlt className="h-8 w-8" />
            </div>
            <div>
              <Image src={bell_icon} alt="" className="h-8 w-8" />
            </div>
            <div>
              <Image
                src={power_icon}
                alt=""
                className="h-8 w-8"
                onClick={async () => {
                  await signOut();
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid h-[95%] w-full">
          <div className="absolute top-[25%] z-10 flex  items-center justify-center rounded-full bg-white sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:h-24 xl:w-24">
            <Image
              src={graph_icon}
              alt=""
              className="sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-10 lg:w-10 xl:h-fit xl:w-fit"
            />
          </div>

          <div className="grid h-[95%] w-[94%] self-center justify-self-center overflow-y-scroll rounded-lg bg-white shadow-lg">
            <div className="flex h-full w-[95%] self-end justify-self-end  sm:w-[93%] md:w-[92%] xl:w-[93%] 2xl:w-[95%]">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorPatientTemplate;
