import React from 'react'

function Button (props) {
    console.log(props)
    return (
        <button>{props.title}</button>
    )
}

export default Button