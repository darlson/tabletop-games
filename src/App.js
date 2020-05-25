import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import AddGame from './Components/AddGame'
import Games from './Components/Games'

class App extends Component {
  constructor (){
    super()
    this.state = {
      games: [],
      name: '',
      players: '',
      desc: '',
      img: '',
    }

    // this.componentDidMount = this.componentDidMount.bind(this)
    this.addGame = this.addGame.bind(this)
    this.saveInfo = this.saveInfo.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {

  }
  addGame(userInput) {
    console.log("hi Mom")
  }
  saveInfo() {

  }
  deleteGame() {

  }
  handleChange() {

  }


  render() {
    return (
      <div className="App">
        <Header />
        <AddGame addGame={this.addGame} />
        {/* <Games /> */}
      </div>
    );
  }
}

export default App;
