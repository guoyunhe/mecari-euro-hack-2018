import React, { Component } from 'react';
import './Viewer.css';

class Viewer extends Component {
  render() {
    return (
      <div className="Viewer">
        <h1>{this.props.name}</h1>
        <button onClick={() => this.props.onBack()}>Back</button>
      </div>
    );
  }
}

export default Viewer;
