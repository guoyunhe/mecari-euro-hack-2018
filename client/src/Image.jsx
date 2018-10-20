import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    const { url, original, modified, downloaded } = this.props.image;

    return (
      <div className="Image">
        <img src={url} alt="preview" />
        <div className="Image__info">
          {modified && <span className="Image__alert">⚠ Photo might be modified too much</span>}
          {downloaded && <span className="Image__alert">️⚠ Photo is from the internet</span>}
          {original && <span className="Image__alert">️Photo is original and real</span>}
        </div>
        <button className="Image__delete-button" onClick={() => this.props.delete(this.props.image)}>Delete</button>
      </div>
    );
  }
}

export default Image;
