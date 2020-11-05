import React, { Component } from 'react';
import RandomThoughtButton from './components/RandomThoughtButton';
import Thought from './components/Thought';
import Tag from './components/Tag';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thoughts: [],
      isRandomThought: false,
      tags: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://api.tronalddump.io/tag')
      .then(res => {
        this.setState({ tags: res.data._embedded.tag });
      })
      .catch(err => console.log(err));
  }

  handleClickOnRandomThoughtButton = () => {
    axios
      .get('http://api.tronalddump.io/random/quote')
      .then(res => {
        const { quote_id: id, value: text } = res.data;
        this.setState({ thoughts: [{ id, text }] });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { tags, thoughts } = this.state;

    const thoughtsList = thoughts.map(thought => (
      <Thought key={thought.id} {...thought} />
    ));

    const tagList = tags.map(tag => <Tag key={tag.value} value={tag.value} />);
    return (
      <div>
        <RandomThoughtButton
          handleClickOnRandomThoughtButton={
            this.handleClickOnRandomThoughtButton
          }
        />
        <br></br>
        {tagList}
        {thoughtsList}
      </div>
    );
  }
}
