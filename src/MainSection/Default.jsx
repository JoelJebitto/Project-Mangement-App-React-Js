import image from "../assets/no-projects.png";

const Default = ({ setMain }) => {
  return (
    <div className="flex flex-col x-full">
      <img src={image} className="mx-auto mt-[25%] h-52 w-52" alt="" />
      <p className="text-center pt-10 text-white">
        Select a Project or get started with a new one
      </p>
      <button
        onClick={() => setMain(0)}
        className="bg-gray-300 active:bg-slate-50 hover:bg-gray-200 mx-auto transition-all w-[50%] text-gray-950 p-4 rounded-3xl mt-7"
      >
        Create New Project
      </button>
    </div>
  );
};

export default Default;
