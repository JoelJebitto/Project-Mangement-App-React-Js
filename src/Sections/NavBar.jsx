import React from "react";
import ProjectCreate from "../MainSection/ProjectCreate";
import Default from "../MainSection/Default";
import { useState } from "react";

const NavBar = ({ project, addProject, removeProject, main }) => {
  const [create, setCreate] = useState(false);
  return (
    <div className="bg-gray-950 p-10 text-gray-100 rounded-3xl shadow-lg hover:shadow-2xl m-7 hover:m-5 transition-all w-1/3">
      <h1 className="text-5xl font-bold">Your Project</h1>

      <button
        onClick={() => main(0)}
        className="bg-gray-300 hover:bg-gray-200 transition-all text-gray-950 p-4 rounded-3xl mt-7"
      >
        Add Project
      </button>

    </div>
  );
};

export default NavBar;
