import React, {Component} from 'react'
import Button from './Button'


class Game extends Component {
    constructor () {
        super()
        this.state = {
            isEditing: false,
            players: '',
            desc: '',
            img: '',
        }
    }

    render(){
        return (
            <div>
                <p>Game.js</p>
                <Button title='Edit'/>
                <Button title='Delete'/>
            </div>
        )
    }
}

export default Game