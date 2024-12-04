import React, { useState } from "react";
import { updateTask } from "../services/api";

const EditTask = ({ task, stopEditing, reloadTasks }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = async () => {
    await updateTask(task._id, { title, description });
    stopEditing();
    reloadTasks();
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={stopEditing}>Cancel</button>
    </div>
  );
};

export default EditTask;

