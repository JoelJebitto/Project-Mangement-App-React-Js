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
    let temp = [];
    data.map((i, ind) => {
      if (ind != id) {
        temp.push(i);
        setMain(null);
      }
    });
    console.log(temp);
    setData(temp);
  };

  const addTodo = (id, todo) => {
    let temp = data;
    temp[id].todo = [todo, ...temp[id].todo];
    setData(temp);
  };

  const removeTodo = (id, todo) => {
    let temp = data;
    temp[id].todo = data[id].todo.filter((item) => item !== todo);
    setData(temp);
  };

  useEffect(() => {
    console.log(data);
  }, [main]);
  return (
    <div className="flex h-screen">
      <NavBar
        project={data}
        setPro={setPro}
        main={setMain}
        removeProject={removeProject}
      />
      <MainSection
        data={data[pro]}
        main={main}
        setMain={setMain}
        addProject={addProject}
        addTodo={addTodo}
        pro={pro}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
