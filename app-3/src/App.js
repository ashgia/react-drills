import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      favoriteAnimals: ["Manatee", "Possum", "Sloth", "Raccoon"],
      inputFavoriteAnimals: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    //setstate
    this.setState({ inputFavoriteAnimals: e.target.value });
  }

  render() {
    console.log("state: ", this.state);
    //logic before rendering
    const listDisplay = this.state.favoriteAnimals
      .filter(animal => {
        return animal
          .toLowerCase()
          .includes(this.state.inputFavoriteAnimals.toLowerCase());
      })
      //listDisplay  = Array [<div></div>,<div></div>,<div></div>,<div></div>,]
      .map(animal => <div>{animal}</div>);

    //rendering
    return (
      <div className="App">
        <input className="inputBox" onChange={this.onChangeHandler} />
        <div>{listDisplay}</div>
      </div>
    );
  }
}
//export
export default App;
