import React, { Component } from 'react';
import RandomThoughtButton from './components/RandomThoughtButton';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    };
  }

  handleClickOnRandomThoughtButton = () => {
    // Make an api call when get random thought button is clicked
    // In state, you can display currently displayed quotes

    axios
      .get('http://api.tronalddump.io/random/quote')
      .then(res => {
        const { quote_id: id, value: text } = res;
        this.setState({ quotes: [{ id, text }] });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <RandomThoughtButton
          handleClickOnRandomThoughtButton={
            this.handleClickOnRandomThoughtButton
          }
        />
      </div>
    );
  }
}
