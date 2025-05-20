import { useState } from "react";
import MainSection from "./Sections/MainSection";
import NavBar from "./Sections/NavBar";
import { useEffect } from "react";


function App() {
  const [data, setData] = useState([]);
  const [main, setMain] = useState(null);
  const [pro, setPro] = useState(null);
  // data[1] = {
  //  title: string,
  //  description: string,
  //  Due Date: date
  //  todo : [ list of string todo ]
  // }

  const addProject = (title = "", description = "", dueDate = "") => {
    setData([
      ...data,
      {
        title: title,
        description: description,
        dueDate: dueDate,
        todo: [],
      },
    ]);
  };

  const removeProject = (id) => {
    const temp = data;
    temp = temp.filter((i) => i.id != id);
    setData(temp);
  };

  const addTodo = (id, todo) => {
    const temp = data;
    temp[id].todo.push(todo);
    setData(temp);
  };

  const removeTodo = (id, todo) => {
    const temp = data;
    temp[id].todo = data[id].todo.filter((item) => item !== todo);
    setData(temp);
  };

  useEffect(() => {

    addProject("Hi", "hello", "...")
  }, [main])
  return (
    <div className="flex h-screen">
      <NavBar
        project={data}
        setPro={setPro}
        main={setMain}
      />
      <MainSection main={main} setMain={setMain} addProject={addProject} />


    </div>
  );
}

export default App;
