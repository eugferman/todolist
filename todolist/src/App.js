import React from 'react';
import { useState } from 'react';
import './App.css';

import AddTask from './components/AddTask/AddTask.js';
import ListTask from './components/ListTask/ListTask.js';

function App() {

  const [taskValue, setTaskValue] = useState('');

  const handlePushTaskValue = (valueTask) => {
    setTaskValue(valueTask);
  };

  return (
    <div className="App">
      <header className="App-header">
          <AddTask onPush={handlePushTaskValue} />
          <ListTask taskValue={taskValue}/>
      </header>
    </div>
  );
}

export default App;
