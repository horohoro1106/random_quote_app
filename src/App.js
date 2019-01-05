import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
    quote: "",
    author: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }
  async componentDidMount() {
    this.getQuote();
  }
  async getQuote() {
    const url = "https://andruxnet-random-famous-quotes.p.mashape.com/";
    const options = {
      headers: {
      "X-Mashape-Key" : "gykKWqNh8SmshAVOkTN5PBc51ElDp10cE0wjsnI8xdo6XWX0mA",
      "Accept": "application/json"
      }
    }
     await fetch(url,options)
       .then(response=>response.json())
       .then(json=> {
      let data = json[0];
    this.setState(()=> ({
      quote: data.quote,
      author: data.author
    }))});
  }

  render() {
   let tweetUrl = `https://twitter.com/intent/tweet?text=${this.state.quote}-${this.state.author}`;
    return (
      <div className="App">
      <h3>Random quote generator</h3>
      <Quote quote={this.state.quote} author={this.state.author} />
      <button className="App-button" onClick={this.getQuote}>New quote</button>
      <button className="App-button">
        <a className="twitter-share-button" 
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer">
         Tweet
         </a>
        </button>
      
      </div>
    );
  }
}

export default App;
