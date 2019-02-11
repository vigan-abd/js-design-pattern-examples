import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookViewModel from './viewModel/BookViewModel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookViewModel />
      </div>
    );
  }
}

export default App;
