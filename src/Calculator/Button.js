import React from 'react';

const Button = (props) => {
    return (
    <div role='button' onClick={props.onButtonClick(props.content)} className={`Button ${props.content === "0" ? "zero" : ""} ${props.type || ""}`}>{props.content}</div>
    );
}

export default Button;