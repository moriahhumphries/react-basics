import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        border: "2px solid purple"
    }
    return (
        <input type="text"
               style={inputStyle}
               onChange={props.changeUsername}
               value={props.currentName}/>
    )
};

export default userInput;