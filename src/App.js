import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World, I am a basic React app.</h1>
      </header>
      <Person />
    </div>
  );
}

export default App;
