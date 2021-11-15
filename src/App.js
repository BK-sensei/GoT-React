import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Character from './components/Character';
import Favorites from './components/Favorites';

class App extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      characters: [],
      favorites: [],
      continents: []
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  // Méthodes
  componentDidMount(){
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(reponse => reponse.json()) 
    .then(result => { 
      this.setState({characters: result})
     });

    fetch("https://thronesapi.com/api/v2/Continents")
    .then(reponse => reponse.json()) 
    .then(result => { 
      this.setState({continents: result})
    });
  }

  handleFavoriteClick(character){
    this.setState({
      favorites: [...this.state.favorites, character]
    })
  }

  render() {
    const { characters, favorites } = this.state
    
    return (
      <div>
        <h1 className="m-5 text-center text-white">Game of thrones</h1>
        
        <Favorites favorites={favorites}/>

        <div className="container">
          <div className="row">
            {characters.map(character => (
              <Character 
                key={``}
                name={character.fullName}
                title={character.title}
                image={character.imageUrl}
                onClick={() => this.handleFavoriteClick(character)}
                isFavorites={favorites.some(favorite => favorite.id === character.id)}
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