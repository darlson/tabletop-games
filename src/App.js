import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import AddGame from './Components/AddGame'
import Games from './Components/Games'
import axios from 'axios'

class App extends Component {
  constructor (){
    super()
    this.state = {
      games: [],
    }

    // this.componentDidMount = this.componentDidMount.bind(this)
    this.addGame = this.addGame.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
  }
  componentDidMount() {
    axios.get('/api/games').then(res => {
      this.setState({ games: res.data })
    })
  }
  addGame(name, players, description, image) {
    console.log("game added")
    const body = {name, players, description, image}
    axios.post('/api/games', body).then(res => {
      this.setState({ games: res.data })
    })
  }
  saveInfo(id, newName, newPlayers, newDescription, newImage) {
    console.log("game edited", newName, newPlayers, newDescription, newImage)
    const body = {newName, newPlayers, newDescription, newImage}
    axios.put(`/api/games/${id}`, body).then(res => {
      this.setState({ games: res.data })
      
      // console.log(res.data)
    })
  }
  deleteGame(id) {
    // console.log("game deleted", id)
    axios.delete(`/api/games/${id}`).then(res => {
      this.setState({ games: res.data })
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <AddGame 
          addGame={this.addGame}
          // handleChange={this.handleChange}
           
        />
        <Games 
          games={this.state.games}
          saveInfo={this.saveInfo}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

export default App;
