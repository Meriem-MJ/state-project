import './App.css';
import Profile from './components/Profile';

import React, { Component } from 'react'

export class App extends Component {
  state = {
    visibility: false
  };
constructor(props){
  super(props);
  this.state = {
    digit: 0,
  };
}
  handleToggleVisibility = () => {
    this.setState(prevState => ({visibility: !prevState.visibility}));
  }

componentDidMount = () => {
setInterval(() => {
this.setState(prevState => ({
  digit: prevState.digit + 1
}))
}, 1000)
}
  render() {
    
    return (

        <div>
          <Profile fullName ="Meriem Jebara" bio ="Student in GoMyCode" profession ="Profession: Logistic Assistant" visibility={this.state.visibility} handleToggleVisibility={this.handleToggleVisibility}/>
          <div className="counter">Counter: {this.state.digit}</div>
        </div>
    )
 
}
}

export default App
