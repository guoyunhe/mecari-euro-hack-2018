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
            addImage={() => 0}
            removeImage={() => 0}
            onPublish={() => this.setState({ published: true })} />
        }
      </div>
    );
  }
}

export default App;
