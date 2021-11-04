import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Character from './components/Character';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }

  }

  // Méthode
  componentDidMount(){
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(reponse => reponse.json()) 
    .then(result => { 
      this.setState({characters: result})
     });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="m-5 text-center text-white">Game of thrones</h1>
        <div className="container">
          <div className="row">
            {this.state.characters.map(character => (
              <Character 
                name={character.fullName}
                title={character.title}
                image={character.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


 // <p key={got.fullName}>{got.fullName}</p>