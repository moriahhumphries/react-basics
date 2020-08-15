import React from 'react';

const person = (props) => { // props = object with all properties passed in
    return <p>I am {props.name} and I am {props.age} years old!</p>
};

export default person;