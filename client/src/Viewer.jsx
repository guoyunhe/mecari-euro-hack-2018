import React, { Component } from 'react';
import Image from './Image';
import './Viewer.css';

class Viewer extends Component {
  render() {
    return (
      <div className="Viewer">
        <h1>{this.props.name}</h1>
        {this.props.images.map(image => <Image key={image.url} image={image} />)}
        <button onClick={() => this.props.onBack()}>Back</button>
      </div>
    );
  }
}

export default Viewer;
