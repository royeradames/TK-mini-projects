import React from "react";
import reactDom from "react-dom";

import './index.css'
import './App.css'
//component

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleSingleClickEvent = () =>{
    alert('Single Click Event Triggered')
  }
  handleDoubleClickEvent = () => alert('Double Click Event Triggered')
  handleMouseEnter = () => alert('Mouse has enter div')
  handleMouseLeave = () => alert('Mouse has left the div')
  handleInputChange = event => {
    console.log('Event -->' + event.target.value)
    this.setState({message:[event.target.value]})
    console.log('message -->' +this.state.message)

  }
  render() {
    return (
      <div className="App">
        <h1>Event Handler </h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleSingleClickEvent}>Single Click Handler</button>
        <button onDoubleClick={this.handleDoubleClickEvent}>Double Click Handler</button>
        <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
        <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div>
        <input type="text" placeholder="" onChange={this.handleInputChange}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);
