import React from 'react';
import { useState } from 'react';
import './AddTask.scss';

function AddTask({onPush}){

  const [task, setTask] = useState ('');
  
  const handleValueTask = (event) => {
    event.preventDefault();
    const tarea = {taskName: task}
    onPush(tarea);
  }

  return (
    <div>
        <h1>Todolist Challenge</h1>
        <form onSubmit={handleValueTask}>
            <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} placeholder="Type a task..."/>
            <button type="submit">Add Task</button>
        </form>
    </div>
    );
}

export default AddTask;