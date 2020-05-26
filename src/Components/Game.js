import React, {Component} from 'react'
import Button from './Button'


class Game extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isEditing: false,
            newName: '',
            newPlayers: '',
            newDescription: '',
            newImage: '',
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    toggleEdit() {
        this.setState ({ isEditing: !this.state.isEditing })
    }
    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
    handleSaveName() {
        const {data} = this.props
        this.props.saveInfo(data.id, this.state.name)
      }

    render(){
        // console.log(this.state)
        const {newName, newPlayers, newDescription, newImage} = this.state
        return (
            <div className="game-card">
                <img src={this.props.data.image} alt={this.props.data.name} />
                <h4>{this.props.data.name}</h4>
                <p>{this.props.data.players} players</p>
                
                <p className="desc-box">{this.props.data.description}</p>
                <div>
                    {!this.state.isEditing ? (
                        <button onClick={ () => this.toggleEdit() } >Edit</button>
                    ) : (
                        <div>
                            <input name="newName" placeholder="Name" onChange={e => this.handleChange(e)} />
                            <input name="newPlayers" placeholder="Players" onChange={e => this.handleChange(e)} />
                            <input name="newDescription" placeholder="Description" onChange={e => this.handleChange(e)} />
                            <input name="newImage" placeholder="Image" onChange={e => this.handleChange(e)} />
                            <br/>
                            <Button title='Cancel' onClickFn={ () => this.toggleEdit()} />
                            <Button title='Save' onClickFn={ () => {
                                this.props.saveInfo(this.props.data.id, newName, newPlayers, newDescription, newImage)
                                this.toggleEdit() } } />
                        </div>
                    )}
                    <Button title='Delete' onClickFn={ () => this.props.deleteGame(this.props.data.id)}/>  
                </div>
            </div>
        )
    }
}

export default Game