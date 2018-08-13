import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();

    this.state = {
      favoriteAnimals: ["Manatee", "Possum", "Sloth", "Raccoon"]
    };
  }

  render() {
    const listDisplay = this.state.favoriteAnimals.map(element => (
      <h2> {element} </h2>
    ));

    return <div>{listDisplay}</div>;
  }
}

export default List;
