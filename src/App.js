import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotesData: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /*
   componentDidMount() {
     fetch('./data.json')
     .then(response => response.json())
     .then(result => {
    const myQuotes = result.map(item => {
      return item
    })
    
    this.setState ({
      quotesData: myQuotes
    })
    const randQuote = this.state.quotesData[ Math.floor(Math.random() * this.state.quotesData.length)]
    console.log(randQuote)
    this.setState ({
      quotesData: randQuote
    })
  }) 
  
}
*/
  handleClick() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const myQuotes = result.map(item => {
          return item;
        });

        this.setState({
          quotesData: myQuotes
        });
        const randQuote = this.state.quotesData[
          Math.floor(Math.random() * this.state.quotesData.length)
        ];
        this.setState({
          quotesData: randQuote
        });
      });
  }
  render() {
    return (
      <div className="container">
        <h1 className="row justify-content-center"> Random Quote Generator </h1>
        <div id="quote-box" className="post card ">
          <div id="text" className="row justify-content-center">
            {this.state.quotesData.quoteText}
          </div>
          <div id="author" className="row justify-content-center">
            {this.state.quotesData.quoteAuthor}
          </div>
          <div id="new-quote" className="row justify-content-center">
            <button
              onClick={this.handleClick}
              type="button"
              className="btn btn-primary">
              Show Me A New Quote
            </button>
          </div>

          <div id="tweet-quote" className="row justify-content-center">
            <button type="button" className="btn btn-info">
              Tweet quote{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
