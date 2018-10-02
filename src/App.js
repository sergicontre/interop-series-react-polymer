import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tinder-item';

class App extends Component {

  constructor(props){
    super(props);
    this.name = 'Mariano'
    this.description = 'Developer'
    this.handleLikeEvent = this.handleLikeEvent.bind(this);
  }

  handleLikeEvent() {
    //TODO: like
    console.log('===>')
  }

  handleNopeEvent() {
    //TODO: nope
  }

  componentDidMount() {
    // When the component is mounted, add your DOM listener to the "nv" elem.
    // (The "nv" elem is assigned in the render function.)
    //document.querySelector('#tinder').addEventListener("like", this.handleLikeEvent);
    //document.querySelector('#tinder').addEventListener("nope", this.handleNopeEvent);
  }

  render() {
    
    return (
      <div className="App">
       <tinder-item id="tinder" avatar="https://ivi.ie/wp-content/uploads/2016/04/default-avatar.png" name={this.name} description={this.description} onLike={this.handleLikeEvent}></tinder-item>
      </div>
    );
  }
}

export default App;
