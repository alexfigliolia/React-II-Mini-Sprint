import React, { Component } from 'react';
import { people } from './people';
import PeopleList from './peopleList/PeopleList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: people
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1>
          {
            'People'.split('').map((letter, i) => {
              return <div>{letter}</div>
            })
          }
        </h1>
        <PeopleList 
          people={this.state.people} />
      </div>
    );
  }
}

export default App;
