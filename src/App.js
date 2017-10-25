import React, { Component } from 'react';
import { people } from './people';
import PeopleList from './peopleList/PeopleList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: people
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          {
            'People'.split('').map((letter, i) => {
              return <div key={i}>{letter}</div>
            })
          }
        </h1>
        <PeopleList 
          people={this.state.people} />
      </div>
    );
  }
}
