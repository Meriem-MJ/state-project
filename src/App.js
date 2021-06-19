import './App.css';
import Profile from './components/Profile';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    visibility: false
  };
  handleToggleVisibility = () => {
    this.setState(prevState => ({visibility: !prevState.visibility}));
  }
  render() {
    return (
      <div>
        <Profile fullName ="Meriem Jebara" bio ="Student in GoMyCode" profession ="Profession: Logistic Assistant" visibility={this.state.visibility} handleToggleVisibility={this.handleToggleVisibility}/>
      </div>
    )
  }
}

export default App
