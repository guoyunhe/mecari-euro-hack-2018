import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  render() {
    return (
      <div className="Create">
        <input type="text" value={this.props.name} />
        <button onClick={() => this.props.onPublish()}>Publish</button>
      </div>
    );
  }
}

export default Create;
