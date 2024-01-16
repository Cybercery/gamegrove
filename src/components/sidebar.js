import React from "react";

const Sidebar = () => {
  return (
    <div className="self-center flex flex-col bg-[#2C2E33] min-h-[90vh] max-h-[90vh] min-w-[15vw] max-w-[15vw] rounded-3xl my-auto ms-[2vw] shadow-[0_0_100px_4px_rgba(0,0,0,1)]">
      <div className="flex flex-row ms-[2.5rem] mt-[2.5rem] mb-[1rem] h-[10%] w-[100%] gap-2">
        <img
          className="w-[5rem]"
          src="../images/logo.svg"
          alt="Gaming Grove Logo"
        />
        <h1 class="text-white self-center text-[1.2rem] font-light">
          Gaming
          <br />
          Grove
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
