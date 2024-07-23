import React from "react";

const ImmigrationCard = ({ icon, title }) => {
  return (
    <div className=" group flex flex-col-3 items-center  justify-center w-2/5 gap-8  p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-2 transition duration-300 ease-in-out">
      <div className=" bg-[#d5f2ec] p-4  rounded-full transition-colors duration-300 ease-in-out group-hover:bg-sky-400  group-hover:text-white">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg p-3 ml-14">{title}</h1>
      

      <h3 className=" text-backgroundColor cursor-pointer hover:text-sky-500 transition duration-300 ease-in-out">
      </h3>
    </div>
  );
};

export default ImmigrationCard;