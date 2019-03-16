import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div> 
        
        <div id="quote-box" className="post card">
          <div id="text"> 
          </div>  
          <div id="author"> Author
          </div>
          <div id="new-quote"> New Qoute
          </div>  
          <div id="tweet-quote"> Tweet quote
          </div>  
        </div>
       </div>
      )
    
  }
}

export default App;
