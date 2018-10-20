import React, { Component } from 'react';
import Create from './Create';
import Viewer from './Viewer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      published: false,
      name: 'Brand new phone 😍',
      images: []
    }
  }

  uploadImage(file) {
    var data = new FormData()
    data.append('photo', file)

    fetch('http://localhost:3000/', {
      method: 'POST',
      body: data
    }).then(res => {
      return res.json();
    }).then(data => {
      let images = this.state.images;
      images.push(data);
      this.setState({ images });
    })
  }

  removeImage(image) {
    let images = this.state.images.filter(img => img.url !== image.url);
    this.setState({ images });
  }

  render() {
    return (
      <div className="App">
        {this.state.published ?
          <Viewer
            name={this.state.name}
            images={this.state.images}
            onBack={() => this.setState({ published: false })} />
          :
          <Create
            name={this.state.name}
            images={this.state.images}
            uploadImage={(file) => this.uploadImage(file)}
            removeImage={(image) => this.removeImage(image)}
            onPublish={() => this.setState({ published: true })} />
        }
      </div>
    );
  }
}

export default App;
