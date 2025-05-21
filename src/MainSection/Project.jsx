import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Project = ({ data, addTodo, pro, removeTodo }) => {
  const task = useRef("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {}, [refresh]);

  const onAddTodo = () => {
    if (task.current.value != "") {
      addTodo(pro, task.current.value);
      task.current.value = "";
      setRefresh(!refresh);
    } else {
      alert("enter the todo");
    }
  };

  const onRemoveTodo = (t) => {
    removeTodo(pro, t);
    setRefresh(!refresh);
  };

  return (
    <div className="p-10 flex flex-col h-[100%] overflow-y-scroll">
      <div>
        <h1 className="text-5xl font-bold">{data.title}</h1>
        {data.dueDate && (
          <p className="py-3 text-xl">
            Finish by <span className="font-semibold">{data.dueDate}</span>
          </p>
        )}
        <p className="py-3 italic font-xl font-medium">{data.description}</p>
      </div>
      <div className="bg-gray-300 p-10 mt-5 flex flex-col rounded-3xl shadow-lg hover:shadow-2xl transition-all">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <div>
          <input
            ref={task}
            type="text"
            name="new_task"
            id="new_task"
            className="p-4 px-5 m-3 ml-0 rounded-3xl w-2/3 outline-none"
          />
          <button
            onClick={onAddTodo}
            className="transition-all hover:p-4 hover:bg-gray-400 rounded-2xl px-3"
          >
            Add Task
          </button>
        </div>
        {data.todo.map((i, ind) => (
          <div
            key={ind}
            className="bg-gray-500 px-4 py-2 hover:p-5 my-2 transition-all flex rounded-2xl shadow-xl"
          >
            <p className="my-auto">{i}</p>
            <span className="flex-1" />
            <button
              type="button"
              className="hover:bg-gray-300 transition-all rounded-2xl p-3"
              onClick={() => {
                onRemoveTodo(i);
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
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
