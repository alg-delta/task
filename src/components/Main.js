import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import "./Components.css";
import { nanoid } from "nanoid";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const addTask = (task) => {
    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };

    setList((prevList) => [...prevList, newTask]);
  };

  const deleteTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  const completeTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      } else {
        return item;
      }
    });
    setList([...newList]);
  };

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        tasks={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
