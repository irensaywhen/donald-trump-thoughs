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

  handleClickOnTag = value => {
    axios
      .get(
        `http://api.tronalddump.io/search/quote?tag=${encodeURIComponent(
          value
        )}`
      )
      .then(res => {
        const thoughts = res.data._embedded.quotes.map(quote => {
          const { quote_id: id, value: text } = quote;
          return { id, text };
        });

        this.setState({ thoughts });
      });
  };

  render() {
    const { tags, thoughts } = this.state;

    const thoughtsList = thoughts.map(thought => (
      <Thought key={thought.id} {...thought} />
    ));

    const tagList = tags.map(tag => (
      <Tag
        key={tag.value}
        value={tag.value}
        handleClick={this.handleClickOnTag}
      />
    ));
    return (
      <div>
        <RandomThoughtButton
          handleClick={this.handleClickOnRandomThoughtButton}
        />
        <br></br>
        {tagList}
        {thoughtsList}
      </div>
    );
  }
}
