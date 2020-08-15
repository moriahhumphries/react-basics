// import React, {Component} from 'react';

import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// React Hooks syntax, React 16.8 or higher

const App = props => {
    // array destructuring
    const [personsState, setPersonsState] = useState({ // useState returns 2 elements, current state/new state, and update function
        persons: [
            {name: "Moriah", age: 32},
            {name: "Andrew", age: 35},
            {name: "Kerrigan", age: 9}
        ],
        otherState: 'Other value'
    });

   const switchNameHandler = () => {
    // console.log("Was clicked")
    // DONT DO THIS personsState.persons[0].name = "Moriah Elise";

    // Will update only changed information
    setPersonsState({
        persons: [
            {name: "Moriah Elise", age: 32},
            {name: "Andrew John", age: 35},
            {name: "Kerrigan", age: 9}
        ]
    }) // takes object as argument and updates
}

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World, I am a basic React app.</h1>
            </header>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobby: Meowing at
                night.</Person>
        </div>
    );
}


export default App;

// State - available only in classes in extend component in some versions of React. If state is updated, React will re-render
// state = {
//     persons: [
//         {name: "Moriah", age: 32},
//         {name: "Andrew", age: 35},
//         {name: "Kerrigan", age: 9}
//     ],
// }
//
//
// // Standard naming convention for handler, pass reference onClick on element
// switchNameHandler = () => {
//     // console.log("Was clicked")
//     // DONT DO THIS personsState.persons[0].name = "Moriah Elise";
//
//     // Will update only changed information
//     this.setState({
//         persons: [
//             {name: "Moriah Elise", age: 32},
//             {name: "Andrew John", age: 35},
//             {name: "Kerrigan", age: 9}
//         ]
//     }) // takes object as argument and updates
// }

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Hello World, I am a basic React app.</h1>
//             </header>
//             <button>Switch Name</button>
//             <Person name="Moriah" age="32"/>
//             <Person name="Andrew" age="35"/>
//             <Person name="Kerrigan" age="9">My Hobby: Meowing at night.</Person>
//         </div>
//     );
// }



