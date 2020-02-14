import React from 'react';
import './AddTask.scss';

function AddTask(){

    return (
        <div>
            <h1>Todolist Challenge</h1>
            <form>
                <input type="text" name="fname" placeholder="Type a task..."/>
                <input type="submit" value="Addtask"/>
            </form>
        </div>
        )
    ;

}

export default AddTask;