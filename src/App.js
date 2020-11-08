import React, { Component } from 'react';
import RandomThoughtButton from './RandomThought/RandomThoughtButton';
import Thought from './Thought/Thought';
import Tag from './Tag/Tag';
import Description from './Description/Description';
import ViewMoreTopicsBtn from './ViewMoreTopicsBtn/ViewMoreTopicsBtn';
import axios from 'axios';

// Styles
import 'normalize.css';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thoughts: [],
      tags: [],
      isTopicsShown: false,
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

  handleClickOnRandomThoughtButton = async () => {
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

  handleClickOnViewMore = () => {
    this.setState({ isTopicsShown: !this.state.isTopicsShown });
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

    const paragraphStyle = {
      paddingBottom: '1rem',
    };

    const tagListStyle = this.state.isTopicsShown
      ? { height: 'auto', overflowY: 'visible' }
      : {
          maxHeight: '2.5rem',
          overflowY: 'hidden',
        };

    return (
      <main>
        <Description />
        <section className={thoughts.length > 0 ? 'thoughs' : null}>
          {thoughtsList}
        </section>
        <RandomThoughtButton
          handleClick={this.handleClickOnRandomThoughtButton}
        />
        <p style={paragraphStyle}>or, pick one of the topics below:</p>
        <div style={tagListStyle}>{tagList}</div>
        <ViewMoreTopicsBtn
          isTopicsShown={this.state.isTopicsShown}
          onClickHandler={this.handleClickOnViewMore}
        />
      </main>
    );
  }
}
