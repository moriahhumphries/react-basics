import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
// import './Person/Person.css';
import Person from './Person/Person';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Assignment</h1>
                <UserInput />
                <UserOutput />
            </div>
        )
    }
}

export default App;


//     // State - available only in classes in extend component in some versions of React. If state is updated, React will re-render
//     state = {
//         persons: [
//             {name: "Moriah", age: 32},
//             {name: "Andrew", age: 35},
//             {name: "Kerrigan", age: 9}
//         ],
//     }
//
//     // Standard naming convention for handler, pass reference onClick on element
//     switchNameHandler = (newName) => {
//         // console.log("Was clicked")
//         // DONT DO THIS this.state.persons[0].name = "Moriah Elise";
//
//         // Will update only changed information
//         this.setState({
//             persons: [
//                 {name: newName, age: 32},
//                 {name: "Andrew John", age: 35},
//                 {name: "Kerrigan", age: 9}
//             ]
//         }) // takes object as argument and updates
//     }
//
//     nameChangeHandler = (event) => {
//         this.setState({
//             persons: [
//             {name: "Moriah", age: 32},
//             {name: event.target.value, age: 35},
//             {name: "Kerrigan", age: 9}
//             ]
//         })
//     }
//
//     render() {
//
//         const style = {
//             backgroundColor: "black",
//             color: "white",
//             font: "inherit",
//             fontWeight: "bold",
//             border: "1 px solid blue",
//             padding: "8px",
//             cursor: "pointer"
//         };
//
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <h1>Hello World, I am a basic React app.</h1>
//                 </header>
//                 {/*// Can pass this way*/}
//                 <button style={style}
//                     onClick={() => this.switchNameHandler("Moriah!!")}>Switch Name</button>
//                 <Person
//                     name={this.state.persons[0].name}
//                     age={this.state.persons[0].age}/>
//                 <Person
//                     name={this.state.persons[1].name}
//                     age={this.state.persons[1].age}
//                     changed={this.nameChangeHandler} />
//                 <Person
//                     name={this.state.persons[2].name}
//                     age={this.state.persons[2].age}
//                     // Click to change name
//                     // click={this.switchNameHandler.bind(this, "Moriah")} >
//                     click={this.switchNameHandler.bind(this, "Moriah")} >
//                     My Hobby: Meowing at
//                     night.</Person>
//             </div>
//         );
//     }
// }


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



