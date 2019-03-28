import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  {id:1,
   text: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”.',
  author: 'Dr. Suess'},
  {id:2,
   text: 'Live in the sunshine, swim the sea, drink the wild air.',
  author: 'Ralph Waldo Emerson'},
  {id:3,
   text: 'The successful warrior is the average man, with laser-like focus.',
  author: 'Bruce Lee'}
  
];


class App extends React.Component {
  constructor() {
     super()
     this.state = {
     id: quotes.id,
     text: quotes[0].text,
     author: quotes[0].author,
     quotesData: []
      
    }
   this.handleClick = this.handleClick.bind(this)
  }
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

handleClick() {
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
                
          
           <div> </div>
           <div id="new-quote" className="row justify-content-center">
             <button 
               onClick={this.handleClick}
               type="button" 
               className="btn btn-primary">New Quote</button>
           </div> 
           
           <div id="tweet-quote" className="row justify-content-center" > 
             <button type="button" className="btn btn-info">Tweet quote </button>
           </div>
           
         </div>
        </div>
       )
     
   }
 }
export default App;
