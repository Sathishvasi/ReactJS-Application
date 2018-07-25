import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rajini from './json/data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React JS Application</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h3>RAJINI MOVIES TRANSFORMATIONS</h3>
        
        <div class="row">
          <ul>
          {
            rajini.map(function(movie){
              return <li>
                        <div class="col-md-3 card-container">
                        <div class="card">
                          <div class="side">
                          <img src={movie.url} class="images" alt="logo" />
                          <div class="m-title">{movie.name}</div>
                          </div>
                          <div class="side back"><a target="_blank" href={movie.wiki}>Click here to view details</a></div>
                        </div>
                        </div>
                      </li>;
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
