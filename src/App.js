import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    // State - available only in classes in extend component in some versions of React. If state is updated, React will re-render
    state = {
        persons: [
            { name: "Moriah", age: 32},
            { name: "Andrew", age: 35},
            { name: "Kerrigan", age: 9}
        ],

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello World, I am a basic React app.</h1>
                </header>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobby: Meowing at night.</Person>
            </div>
        );
    }
}

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


export default App;
