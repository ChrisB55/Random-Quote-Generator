import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  {text: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”.',
  author: 'Dr. Suess'},
  {text: 'Live in the sunshine, swim the sea, drink the wild air.',
  author: 'Ralph Waldo Emerson'},
  {text: 'The successful warrior is the average man, with laser-like focus.',
  author: 'Bruce Lee'}
];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ['quote1', 'quote2', 'quote3'],
    };
  }
  render() {
    return (
      <div> 
        
        <div id="quote-box" className="post card">
          <div id="text"> 
            
          {this.state.text.map(item => (
            <ul key={item}>{item}</ul>
          ))}
        
          </div>  
          <div id="author"> 
          </div>
          <div id="new-quote"> 
          </div>  
          <div id="tweet-quote"> Tweet quote
          </div>  
        </div>
       </div>
      )
    
  }
}

export default App;
