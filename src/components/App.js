import React, { Component } from 'react';
import './App.css'; 
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">React UI</h1>
        
        <div className="container">
          <section className="section section-button">
            <h2>Buttons</h2>
            <div className="sep">
              <Button>Default</Button>
            </div> 
            <div className="sep">
              <Button style="secondary">Secondary</Button>
            </div>              
            <div className="sep">
              <Button style="full">Full</Button>
            </div>    
            <div className="sep">
              <Button style="full secondary">Full secondary</Button>
            </div>         
            <div className="sep">
              <Button disabled={true}>Disabled</Button>
            </div>   
          </section>
        </div>
      </div>
    );
  }
}

export default App;
