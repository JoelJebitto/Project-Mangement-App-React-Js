import { useState } from "react";
import MainSection from "./Sections/MainSection";
import NavBar from "./Sections/NavBar";


function App() {
  const [data, setData] = useState([]);
  const [main, setMain] = useState(null);
  // data[1] = {
  //  title: string,
  //  discription: string,
  //  Due Date: date
  //  todo : [ list of string todo ]
  // }

  const addProject = (title = "", discription = "", dueDate = "") => {
    setData([
      ...data,
      {
        title: title,
        discription: discription,
        dueDate: dueDate,
        todo: [],
        id: data.length() == 0 ? 0 : data[data.length() - 1].id + 1,
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

  return (
    <div className="flex h-screen">
      <NavBar
        project={data}
        addProject={addProject}
        removeProject={removeProject}
        main={setMain}
      />
      <MainSection main={main} />


    </div>
  );
}

export default App;
