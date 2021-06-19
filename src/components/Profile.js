import React, { Component } from 'react';
import imgSrc from '../imgSrc.jpg';

export class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <button className="button" onClick={this.props.handleToggleVisibility}>{this.props.visibility ? "Hide Profile" : "Show Profile"}</button>
          {this.props.visibility && (
            <ul>
              <li>{this.props.fullName}</li>
              <li><img src={imgSrc} alt="imgSrc" width={150} /></li>
              <li>{this.props.bio}</li>
              <li>{this.props.profession}</li>
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default Profile