import React from 'react';

const person = (props) => { // props = object with all properties passed in
    return (
        // Can call methods as props to change parent component
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            {/* displays content that is a child of the opening and closing tag of Component*/}
            <p>{props.children}</p>

            {/*Listening on Change - updates dynamically, value is prefilled*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;