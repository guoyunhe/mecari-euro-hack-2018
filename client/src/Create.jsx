import React, { Component } from 'react';
import Image from './Image';
import './Create.css';

class Create extends Component {
  render() {
    return (
      <div className="Create">
        <input type="text" value={this.props.name} />
        {this.props.images.map(image => <Image image={image} delete={this.props.removeImage} />)}
        <button onClick={() => this.props.onPublish()}>Publish</button>
      </div>
    );
  }
}

export default Create;
