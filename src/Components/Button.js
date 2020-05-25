import React from 'react'

function Button (props) {
    return (
        <button onClick={props.onClickFn}> {props.title} </button>
    )
}

export default Button