import React, { Component } from 'react';
import Image from './Image';
import doge from './doge.png'
import './Create.css';

class Create extends Component {
  render() {
    return (
      <div className="Create">
        <h1>Post item</h1>
        <header className="Create__header">
          <label>Name</label>
          <input type="text" value={this.props.name} onChange={e => this.props.updateName(e.target.value)} />
          <label>Photos</label>
          <input
            type="file"
            multiple
            onChange={e => {
              if (e.target.files) {
                for (var i = 0; i < e.target.files.length; i++) {
                  this.props.uploadImage(e.target.files[i])
                }
              }
            }} />
        </header>
        {this.props.images.map(image => <Image key={image.url} image={image} delete={this.props.removeImage} />)}
        {this.props.isProcessing && <div className="Create__spinner-wrap">
          <img className="Create__spinner" src={doge} alt="spinner" />
          <div>Processing...</div>
        </div>}
        <button onClick={() => this.props.onPublish()}>Publish</button>
      </div>
    );
  }
}

export default Create;
