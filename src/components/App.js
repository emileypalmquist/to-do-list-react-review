import React from 'react';
import '../App.css';
import ToDoContainer from './ToDoContainer'

function App() {
  return (
    <div className="App">
      <h1 className='title'>To Do List</h1>
      <h4>Let's be Productive!</h4>
      <ToDoContainer />
    </div>
  );
}

export default App;
