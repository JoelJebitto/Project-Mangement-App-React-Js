import ReactDOM from "react-dom";
const Project = () => {
  return ReactDOM.createPortal(
    <div>Default</div>,
    document.getElementById("main"),
  );
};

export default Project;
