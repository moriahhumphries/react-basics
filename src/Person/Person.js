import React from 'react';

const person = (props) => { // props = object with all properties passed in
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old!</p>
            {/* displays content that is a child of the opening and closing tag of Component*/}
            <p>{props.children}</p>
        </div>
    )
};

export default person;