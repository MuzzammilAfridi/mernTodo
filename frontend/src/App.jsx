import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import EditTask from "./components/EditTask";

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  const reloadTasks = () => {
    setEditingTask(null); // Close edit view after refreshing tasks
  };

  return (
    <div className="maincont">
    <div className="main">
      <h1>To-Do List</h1>
      {editingTask ? (
        <EditTask
          task={editingTask}
          stopEditing={() => setEditingTask(null)}
          reloadTasks={reloadTasks}
        />
      ) : (
        <>
          <TaskForm reloadTasks={reloadTasks} />
          <TaskList startEditing={setEditingTask} />
        </>
      )}
    </div>
    </div>
  );
};

export default App;
