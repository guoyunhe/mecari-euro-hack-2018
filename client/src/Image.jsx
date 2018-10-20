import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    const { url, converted, modified, downloaded } = this.props.image;

    return (
      <div className="Image">
        <img className="Image__image" src={url} alt="preview" />
        <div className="Image__info">
          {modified && <span className="Image__alert">⚠ Photo might be modified too much</span>}
          {downloaded && <span className="Image__alert">️⚠ Photo is from the internet</span>}
          {converted && <span className="Image__alert">️⚠ Photo is converted before uploading</span>}
        </div>
        {this.props.delete && <button className="Image__delete-button" onClick={() => this.props.delete(this.props.image)}>Delete</button>}
      </div>
    );
  }
}

export default Image;
