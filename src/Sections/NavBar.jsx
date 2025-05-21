import React from "react";
import ProjectCreate from "../MainSection/ProjectCreate";
import Default from "../MainSection/Default";
import { useState } from "react";

const NavBar = ({ project, main, setPro, removeProject }) => {
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
          <div className="flex bg-gray-900 mb-4 p-4 hover:font-bold w-full transition-all active:bg-gray-800 hover:text-lg hover:p-[1.01rem] text-left rounded-2xl ">
            <button
              key={ind}
              onClick={() => {
                setPro(ind);
                main(1);
                console.log(ind);
              }}
              className=""
            >
              {i.title}
            </button>

            <div className="flex-1" />
            <button
              className="hover:bg-gray-700 p-2 rounded-3xl"
              onClick={() => {
                removeProject(ind);
                setCreate(!create);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
