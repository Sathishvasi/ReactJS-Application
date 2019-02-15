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
        
        <div class="bg-color">
        < h4 class = "pt-5 pb-4 trans" > RAJINI MOVIES TRANSFORMATIONS </h4>
        
        <div class="container">
          <ul class="row p-0">
          {
            rajini.map(function(movie){
              return <li class = "col" >
                        <div class="card-container">
                        <div class="card">
                          <div class="side">
                          <img src={movie.url} class="images" alt="logo" />
                          <div class="m-title">{movie.name}</div>
                          </div>
                          <div class="side back">
                              <a target="_blank" href={movie.wiki}>Click here to view details</a>
                              < img class="wiki" src = "https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png"/>
                          </div>
                        </div>
                        </div>
                      </li>;
            })
          }
          </ul>
        </div>
        </div>


      </div>
    );
  }
}

export default App;
