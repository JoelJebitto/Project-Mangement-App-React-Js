
import ProjectCreate from "../MainSection/ProjectCreate";
import Project from "../MainSection/Project";
import Default from "../MainSection/Default";
const MainSection = ({ main }) => {
  return (
    <div
      id="main"
      className="h-9/10 bg-gray-500 m-7 shadow-lg hover:shadow-2xl rounded-3xl p-5 hover:m-5 hover:ml-0 transition-all  ml-0 w-2/3 "
    >

      {
        (main === 0) ? <ProjectCreate /> : (main === 1) ? <Project /> : <Default />
      }
    </div>
  );
};

export default MainSection;
