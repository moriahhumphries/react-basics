import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World, I am a basic React app.</h1>
            </header>
            <Person name="Moriah" age="32"/>
            <Person name="Andrew" age="35"/>
            <Person name="Kerrigan" age="9">My Hobby: Meowing at night.</Person>
        </div>
    );
}

export default App;
