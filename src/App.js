import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 
  // dc6zaTOxFJmzC
  componentDidMount() {
    axios.get('https://api.giphy.com/v1/gifs/trending?limit=25&api_key=dc6zaTOxFJmzC')
      .then( (response) => {
        // handle success
        //console.log(response.data);
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    // .then(res => res.json())
    // .then(resData => {
    //   this.setState({
    //     gifs: resData.data
    //   })
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  performSearch = (query) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=25&api_key=dc6zaTOxFJmzC`)
      .then( (response) => {
        // handle success
        //console.log(response.data);
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() { 
    //console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
