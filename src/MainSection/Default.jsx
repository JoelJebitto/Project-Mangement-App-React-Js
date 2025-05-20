import ReactDOM from "react-dom";
const Default = () => {
  return ReactDOM.createPortal(
    <div>Default</div>,
    document.getElementById("main"),
  );
};

export default Default;
