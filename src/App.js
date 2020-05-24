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

  }
  componentDidMount() {

  }
  addGame() {

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
        <AddGame />
        <Games />
      </div>
    );
  }
}

export default App;
