import React from 'react'
import Button from './Button'

function AddGame (props) {
    console.log(props)
    return (
        <div>
            <p>AddGame.js</p>
            <Button title='Add Game' onClickFn={props.addGame} />
        </div>
    )
}

export default AddGame