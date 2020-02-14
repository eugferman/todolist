import React from 'react';
import './App.css';

import AddTask from './components/AddTask/AddTask.js';
import ListTask from './components/ListTask/ListTask.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AddTask />
          <ListTask />
      </header>
    </div>
  );
}

export default App;
