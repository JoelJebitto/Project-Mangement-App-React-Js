import React from "react";
import ProjectCreate from "../MainSection/ProjectCreate";
import Default from "../MainSection/Default";
import { useState } from "react";

const NavBar = ({ project, main, setPro }) => {
  const [create, setCreate] = useState(false);
  return (
    <div className="bg-gray-950 p-10 text-gray-100 rounded-3xl shadow-lg hover:shadow-2xl m-7 hover:m-5 transition-all w-1/3">
      <h1 className="text-5xl font-bold">Your Project</h1>

      <button
        onClick={() => main(0)}
        className="bg-gray-300 active:bg-slate-50 hover:bg-gray-200 transition-all text-gray-950 p-4 rounded-3xl mt-7"
      >
        Add Project
      </button>
      <div className="pt-5 overflow-y-auto h-[80%] mt-5 px-3 ">
        {project.map((i, ind) => (
          <button
            key={ind}
            onClick={() => {
              setPro(ind)
              main(1)
              console.log(ind);

            }}
            className="bg-gray-900 mb-4 p-4 hover:font-bold w-full transition-all active:bg-gray-800 hover:text-lg hover:p-[1.01rem] text-left rounded-2xl ">
            {i.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
