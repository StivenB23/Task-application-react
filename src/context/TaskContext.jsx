import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //almacena datos
export function TaskContextProvider(props) {
  // Componente que engloba al resto de componentes
  useEffect(() => {
    setTasks(data);
  }, []);
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
   
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
