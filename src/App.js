import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotesData: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
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
        console.log(randQuote);
        this.setState({
          quotesData: randQuote
        });
      });
  }

  handleClick() {
    fetch('./data.json')
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
    const tweetQuote =
      'https://twitter.com/intent/tweet?' +
      encodeURIComponent(
        '"' +
          this.state.quotesData.quoteText +
          '" -' +
          this.state.quotesData.quoteAuthor
      );
    return (
      <div className="container">
        <h1 className="row justify-content-center"> Random Quote Generator </h1>

        <div id="quote-box">
          <div id="text" className="row justify-content-center">
            {this.state.quotesData.quoteText}
          </div>
          <div id="author" className="row justify-content-center">
            {this.state.quotesData.quoteAuthor}
          </div>
          <div className="row justify-content-center">
            <button
              id="new-quote"
              onClick={this.handleClick}
              type="button"
              className="btn btn-primary">
              Show Me A New Quote
            </button>
          </div>

          <div className="row justify-content-center">
            <button id="tweet-button" type="button" className="btn btn-info">
              <a id="tweet-quote" href={tweetQuote} target="_blank">
                Tweet my quote
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
