import React, { Component } from 'react'
import DataFieldset from './DataFieldset';
import Form from './Form';
import PersonalFieldset from './PersonalFieldset';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <PersonalFieldset />
        <DataFieldset />
      </div>
    )
  }
}

export default App;
