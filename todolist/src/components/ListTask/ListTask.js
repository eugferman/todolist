import React from 'react';
import './ListTask.scss';

function ListTask({taskValue}){
    const taskArr = [];
    taskArr.push(taskValue);


    return <div>
        <h3>List tasks</h3>
        <ul>
          {taskArr.map((tasks) => (
            <li key={tasks.id}>
              <p>{tasks.taskName}</p>
            </li>
          ))}
        </ul>
    </div>;
}

export default ListTask;

/*

<ul>
          {taskArr.map((users) => (
            <li key={users.idUser}>
              <p>Name: {users.name}</p>
              <p>Email: {users.email}</p>
              <button onClick={() => deleteItem('usuarios-registrados', users.idUser)}>Seleccionar usuario</button>
            </li>
          ))}
        </ul>

*/