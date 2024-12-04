import React, { useState, useEffect } from "react";
import { fetchTasks, updateTask, deleteTask } from "../services/api";

const TaskList = ({ startEditing }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await fetchTasks();
    setTasks(response.data);
  };

  const toggleComplete = async (task) => {
    await updateTask(task._id, { ...task, isCompleted: !task.isCompleted });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <ul >
      {tasks.map((task) => (
        <li key={task._id}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleComplete(task)}
          />
          <span>{task.title}</span>
          <button onClick={() => startEditing(task)}>Edit</button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
