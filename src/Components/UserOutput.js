import React from 'react';

const userOutput = (props) => {
    const outputStyle = {
        border: "2px solid pink",
        backgroundColor: "lightgray",
        width: "20vw"
    }
    return (
        <div className="output"
        style={outputStyle}>
            <p>Username: {props.userName}</p>

            <p>Paragraph 2</p>
        </div>
    )
};

export default userOutput;