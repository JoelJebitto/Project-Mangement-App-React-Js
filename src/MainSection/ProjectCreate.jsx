import { useRef } from "react";

const ProjectCreate = ({ setMain, addProject }) => {
  const title = useRef("");
  const description = useRef("");
  const dob = useRef("");
  const save = () => {
    if (title.current.value != "") {
      addProject(
        title.current.value,
        description.current.value,
        dob.current.value,
      );
      setMain(null);
    } else {
      alert("Enter The Title");
    }
  };
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-5xl text-center font-bold my-10 mt-[20%] text-gray-100 ">
        Add A New Project
      </h1>

      <div className="flex-1  px-20 flex h-auto flex-col">
        <label htmlFor="title" className="text-xl py-1">
          Title :
        </label>
        <input
          ref={title}
          type="text"
          id="title"
          className="rounded-2xl p-2 px-4 mb-10 focus:ring-0 focus:outline-none"
        />

        <label htmlFor="description" className="text-xl py-1 ">
          Description :
        </label>
        <textarea
          ref={description}
          rows={5}
          type="text"
          id="description"
          className="rounded-2xl py-3 px-4 mb-10 focus:ring-0 focus:outline-none"
        />

        <label htmlFor="date" className="text-xl py-1 ">
          DOB :
        </label>
        <input
          ref={dob}
          type="date"
          name=""
          id="date"
          className="rounded-2xl p-2 px-4 mb-10 focus:ring-0 focus:outline-none"
        />

        <div className="flex flex-row-reverse w-full">
          <button
            onClick={save}
            className=" mx-5 bg-stone-300 active:bg-slate-50 hover:bg-stone-200 transition-all text-gray-950 p-4 px-6 rounded-3xl mt-7"
          >
            {" "}
            Save{" "}
          </button>
          <button
            onClick={() => setMain(null)}
            className=" mx-5 bg-gray-300 active:bg-slate-50 hover:bg-gray-200 transition-all text-gray-950 p-4 px-6 rounded-3xl mt-7"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
