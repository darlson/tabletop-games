import React, {Component} from 'react'


class AddGame extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            players: '',
            description: '',
            image: '',
        }
    }
    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
        
    // console.log(props)
    render () {
        // console.log(this.state)
        const {name, players, description, image} = this.state
        return (
            <div>
                <input name="name" placeholder="Name" onChange={e => this.handleChange(e)} />
                <input name="players" placeholder="Players" onChange={e => this.handleChange(e)} />
                <input name="description" placeholder="Description" onChange={e => this.handleChange(e)} />
                <input name="image" placeholder="Image" onChange={e => this.handleChange(e)} />
                <button onClick={ () => { (this.props.addGame(name, players, description, image)) }}>Add Game</button>
            </div>
        )
    }
}

export default AddGame